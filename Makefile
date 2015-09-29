# vim: noexpandtab:ts=4:sw=4

# Copyright 2015 Carsten Klein
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.


build_dir       = ./build
build_cover_dir = $(build_dir)/cover
build_doc_dir   = $(build_dir)/doc
build_src_dir   = $(build_dir)/src
build_test_dir  = $(build_dir)/test
dist_dir        = ./lib
src_dir         = ./src
test_dir        = ./test
watchdog        = $(build_dir)/watchdog


.PHONY: build build-cover build-doc build-src build-test \
		check-cover clean clean-build clean-cover clean-dist \
        cover deps dist lint test test-run \
        watch watch-run


build: build-src build-test


build-cover:
	@echo "gathering coverage data..."
	@babel-istanbul cover _mocha $(build_dir)/test/*


build-doc: $(src_dir)/*
	@echo "building docs..."
	@esdoc -c esdoc.json >/dev/null


build-src: $(build_src_dir)/*


build-test: $(build_test_dir)/*


check-cover: $(build_cover_dir)
	@echo "checking coverage..."
	@babel-istanbul check-coverage


clean: clean-build clean-dist


clean-build:
	@echo "cleaning build..."
	@-rm -Rf $(build_dir)


clean-cover:
	@echo "cleaning coverage data..."
	@-rm -Rf $(build_cover_dir)


clean-dist:
	@echo "cleaning dist..."
	@-rm -Rf $(dist_dir)


clean-doc:
	@echo "cleaning docs..."
	@-rm -Rf $(build_doc_dir)


cover: clean-cover build build-cover check-cover


deps:
	exit 1
#	@-sudo npm -g install babel babel-istanbul eslint mocha coldrye-es/eslint-config-coldrye


dist: clean-dist test cover
	@echo "creating distribution..."
	@BABEL_ENV="DIST" babel -d $(dist_dir) $(src_dir) >/dev/null


doc: clean-doc build-doc


lint: $(src_dir)/* $(test_dir)/*
	@echo "linting..."
	@eslint $?


test: lint test-run 


test-run: $(test_dir)/*
	@echo "running tests..."
	@BABEL_ENV="TEST" mocha --compilers js:babel/register $?


watch:
	@echo "watching... (CTRL-C to abort)"
	@-mkdir $(build_dir)
	@while true; do make --quiet watch-run; sleep 1; done


watch-run: $(watchdog)
	@touch $?


$(watchdog): $(src_dir)/* $(test_dir)/* $(build_src_dir)/* $(build_test_dir)/*
	@-make test
	@echo "watching... (CTRL-C to abort)"


$(build_src_dir)/*: $(src_dir)/*
	@echo "building sources..."
	@-mkdir -p $(build_src_dir)
	@cp $? $(build_src_dir)


$(build_test_dir)/*: $(test_dir)/*
	@echo "building tests..."
	@BABEL_ENV="BUILD" babel -d $(build_dir) $? >/dev/null

