# TODO:fileheader


BUILD_DIR    = ./build
COVERAGE_DIR = ./coverage
DIST_DIR     = ./dist
SRC_DIR      = ./src
TEST_DIR     = ./test


.PHONY: build clean clean-build clean-coverage clean-dist coverage dist lint test


build: clean-build
	BABEL_ENV="BUILD" babel -d $(BUILD_DIR) $(TEST_DIR)


clean: clean-build clean-coverage clean-dist


clean-build:
	@-rm -Rf $(BUILD_DIR)


clean-coverage:
	@-rm -Rf $(COVERAGE_DIR)


clean-dist:
	@-rm -Rf $(DIST_DIR)


coverage: test build clean-coverage
	babel-istanbul cover _mocha --report html $(BUILD_DIR)/*


dist: coverage clean-dist
	BABEL_ENV="DIST" babel -d $(DIST_DIR) $(SRC_DIR)


# TODO lint changed files only
lint:
	eslint $(SRC_DIR)/* $(TEST_DIR)/*


test: lint
	BABEL_ENV="TEST" mocha --compilers js:babel/register $(TEST_DIR)/*

