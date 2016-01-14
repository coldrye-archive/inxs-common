# inxs-common

![logo](https://raw.githubusercontent.com/coldrye-es/inxs-artwork/master/dist/logo.png)

Simple framework for implementing custom injection frameworks using Babel 6.x.

The framework provides base classes for implementing custom injectors for the
following use cases

 - static property injection
 - instance property injection
 - static method parameter injection
 - instance method parameter injection


## Limitations

As of now, it is not possible to inject parameters into free functions.
There is no abstract injector for constructor injection.


## Breaking Changes

Since version v0.1.0 this is no longer compatible with Babel 5.x. 

ES decorators are about to change. Currently, we must use the legacy ES2015 decorators.
Support for these decorators is provided by the interim package published by
[loganfsmyth](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy).

Please note that during build we have to make sure that **babel-traverse** is up to date, too.
See https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy/issues/8 for more information.

Another important change is that the distribution layout was changed since v0.1.0.
Clients of this will now be able to simply import from ``<package>`` rather than 
from ``<package>/lib``.


## Travis-CI

[![Build Status](https://travis-ci.org/coldrye-es/inxs-common.svg?branch=master)](https://travis-ci.org/coldrye-es/inxs-common)


## Project Site

The project site, see (2) under resources below, provides more insight into the project,
including test coverage reports and API documentation.


## Contributing

While I believe that the feature set of the software can be considered final,
you are very welcome to propose changes and report bugs, or even provide pull
requests on [github](https://github.com/coldrye-es/inxs-common).

See the [contributing guidelines](https://github.com/coldrye-es/inxs/blob/master/CONTRIBUTING.md) for more information.


### Contributors

 - [Carsten Klein](https://github.com/silkentrance) **Maintainer**


## Runtime Dependencies

 - [babel-runtime](https://github.com/babel/babel)
 - [esbases](https://github.com/coldrye-es/esbases)
 - [sprintf-js](https://github.com/alexei/sprintf.js)


## Development Dependencies

See [esmake](https://github.com/coldrye-es/esmake#development-dependencies) for more information on development dependencies.


## Building

See [esmake](https://github.com/coldrye-es/esmake#build-process) and the targets listed under
[esmake](https://github.com/coldrye-es/esmake#makefilesoftwarein) for more information on how to build this.


## Installation

``npm install --save inxs-common``


## Usage

Well, this depends. Since this is basically a framework of classes, assertions
and other rather simple stuff, you are free to implement your injection framework
the way you like. See the [inxs](https://github.com/coldrye-es/inxs) project for
more information on how to make use of this framework.


## Resources

 - (1) [Github Site](https://github.com/coldrye-es/inxs-common)
 - (2) [Project Site](http://inxs.es.coldrye.eu)

