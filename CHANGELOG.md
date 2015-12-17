0.1.0 / 2015-12-17
==================

  * version bump v0.1.0
  * introducing CHANGELOG.md
  * now depending on coldrye-es/esbases for proper native class extension
  * extracted babel options to .babelrc
  * cosmetic changes to the test cases
  * further hardening of npm prepublish
  * breaking changes here!
  * upgraded to babel 6.3.x
  * distribution layout changed and flattened, there is no more need to import from '<package>/lib/...' instead one can now directly import from '<package>/...'

0.0.12 / 2015-10-29
===================

  * version bump v0.0.12
  * fixes [#3](https://github.com/coldrye-es/inxs-common/issues/3)
  * fixes [#2](https://github.com/coldrye-es/inxs-common/issues/2)
  * fixes [#1](https://github.com/coldrye-es/inxs-common/issues/1)

0.0.11 / 2015-10-18
===================

  * version bump v0.0.11
  * previous npm publish failed, package is missing actual code
  * improving upon documentation
  * add make publish to overcome npm publish issues
  * improving on esdoc config, reverting back to original esdoc-importpath-plugin
  * fixing lint problems
  * add vim modeline

0.0.10 / 2015-10-15
===================

  * version bump v0.0.10
  * now using esdoc importpath plugin
  * improving existing documentation

0.0.9 / 2015-10-10
==================

  * version bump v0.0.9
  * Update README.md
  * add travis-ci badge
  * integrating travis-ci

0.0.8 / 2015-10-10
==================

  * skipped to sync version numbers with inxs-common

0.0.7 / 2015-10-10
==================

  * version bump v0.0.7
  * added missing keywords

0.0.6 / 2015-10-10
==================

  * version bump v0.0.6
  * fixing dependencies
  * moving dependencies to npmjs

0.0.5 / 2015-10-10
==================

  * version bump to 0.0.5
  * switching to esaver for test assertions

0.0.4 / 2015-10-10
==================

  * version bump 0.0.4
  * fixing bug that lead to false positives on canInject()
  * introducing devdocs
  * removed unused import
  * establishing common test code layout
  * generated api docs now include only public identifiers
  * added esdoc to globalDevDependencies
  * improving build process
  * removed custom error check handler
  * improved on existing documentation
  * improving on build and test process

0.0.3 / 2015-10-10
==================

  * version bump 0.0.3
  * added missing message

0.0.2 / 2015-10-10
==================

  * version bump to 0.0.2
  * util.className() throws on invalid target
  * improved tests
  * improved on className apidoc

0.0.1 / 2015-10-07
==================

  * importing existing sources
  * renamed util#targetName to util#className and made it more versatile
  * fixed tests
  * targetName now returns instanceOf .. for instances
  * dist target now produces lib instead of dist
  * fixing lint issues in test
  * dropped options parameter on #inject()
  * fixing dependencies
  * fixing footnote reference
  * switching to GNU Make
  * improved on readme
  * switching to default exports and imports
  * added lint script
  * fixed lint errors
  * fixed istanbul config
  * added babel DIST env
  * added missing dev dependencies
  * redefined cover script
  * now gathering coverage using babel-istanbul
  * fixing existing bugs in util
  * maxed out test coverage by implementing missing tests
  * introduced options parameter on #inject()
  * cleaned up jsdoc
  * removed inject() method impls

