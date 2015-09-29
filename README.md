# inxs-common

Simple framework for implementing custom injection frameworks using Babel.

The framework provides base classes for implementing custom injectors for the
following use cases

 - static property injection
 - instance property injection
 - static method parameter injection
 - instance method parameter injection


## Limitations

As of now, it is not possible to inject parameters into free functions.
There is no abstract injector for constructor injection.


## Contributing

While I believe that the feature set of the software can be considered final,
you are very welcome to propose changes and report bugs, or even provide pull
requests on [github](https://github.com/coldrye-es/inxs-common).


### Contributors

 - [Carsten Klein](https://github.com/silkentrance) **Maintainer**


## Runtime Dependencies

 - [babel-runtime](https://github.com/babel/babel)
 - [sprintf-js](https://github.com/alexei/sprintf.js)


## Development Dependencies

Development dependencies must be installed globally as we need the cli commands
provided by those packages.

Besides the dependencies listed in package.json#globalDevDependencies, you need
have the following tools installed.

 - GNU Make


## Why GNU Make and not Grunt or Gulp or ...?

The current situation with the available task runners is so that Gulp is not my
cup of tea and that Grunt lacks active development. Other task runners simply
do not do the trick or are way too specialized for my purposes.

Also, see (2) under resources below for my overall motivation. Opposed to the
view expressed by the author, though, I even refrain from using **npm** for
my build process as this also turned out to be an actual pain in the arse.

Besides, have a look at the Makefile and decide for yourself whether using Grunt
or Gulp would have made things easier or even more complex.


## Building

In order to build this from source, you need a working Bash. See the Makefile
or package.json#scripts for the available targets.


## Installation

Simply run **npm install --save inxs-common** to install.


## Usage

Well, this depends. Since this is basically a simple framework of classes,
assertions and other rather simple stuff, you are free to implement your
injection framework the way you like. See the coldrye-es/inxs project for
more information on how to make use of this framework.


## Resources

 - (1) [Github Site](https://github.com/coldrye-es/inxs-common)
 - (2) [Keith Cirkel on "Why we should stop using Grunt & Gulp"](http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt)

