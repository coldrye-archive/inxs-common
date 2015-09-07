
# inxs-common

Simple framework for implementing custom injection frameworks using Babel.

The framework provides base classes for implementing custom injectors for the
following use cases

 - static property injection
 - instance property injection
 - static method parameter injection
 - instance method parameter injection


## Limitations

As of now, it is not possible to inject parameters into free functions and
constructor injection was dropped since it is much easier to both implement
and use instance or static property injection.

