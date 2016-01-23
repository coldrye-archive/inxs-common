[![Build Status](https://travis-ci.org/coldrye-es/inxs-common.svg?branch=master)](https://travis-ci.org/coldrye-es/inxs-common)
[![NPM](https://nodei.co/npm/inxs-common.png?mini=true)](https://nodei.co/npm/inxs-common/)

# inxs-common

![logo](https://raw.githubusercontent.com/coldrye-es/inxs-artwork/master/dist/logo.png)

Simple framework for implementing custom injection frameworks using Babel 6+.

The framework provides base classes for implementing custom injectors for the
following use cases

 - static property injection
 - instance property injection
 - static method parameter injection
 - instance method parameter injection


## Releases

See the [changelog](https://github.com/coldrye-es/inxs-common/blob/master/CHANGELOG.md) for more information.


## Limitations

As of now, it is not possible to inject parameters into free functions.
There is no abstract injector for constructor injection.


## Project Site

The project site, see (2) under resources below, provides more insight into the project,
including test coverage reports and API documentation.


## Contributing

While I believe that the feature set of the software can be considered final,
you are very welcome to propose changes and report bugs, or even provide pull
requests on [github](https://github.com/coldrye-es/inxs-common).

See the [contributing guidelines](https://github.com/coldrye-es/inxs-common/blob/master/CONTRIBUTING.md) for more information.


### Contributors

 - [Carsten Klein](https://github.com/silkentrance) **Maintainer**


### Building

See [build process](https://github.com/coldrye-es/esmake#build-process) and the available [build targets](https://github.com/coldrye-es/esmake#makefilesoftwarein)
for more information on how to build this.

See also [development dependencies](https://github.com/coldrye-es/esmake#development-dependencies) and on how to deal with them.


## Installation

``npm install --save inxs-common``


## Runtime Dependencies

 - _[babel-runtime](https://github.com/babel/babel)_
 - [esbases](https://github.com/coldrye-es/esbases)
 - [sprintf-js](https://github.com/alexei/sprintf.js)

**The dependencies denoted in _italics_ must be provided by the using project.**


## Usage

Well, this depends. Since this is basically a framework of classes, assertions
and other rather simple stuff, you are free to implement your injection framework
the way you like. See the [inxs](https://github.com/coldrye-es/inxs) project for
more information on how to make use of this framework.


## Resources

 - (1) [Github Site](https://github.com/coldrye-es/inxs-common)
 - (2) [Project Site](http://inxs.es.coldrye.eu)

