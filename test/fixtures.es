// TBD:FILEHEADER

import * as common from '../src/inxs-common.es';


class IncompleteInjectorImpl extends common.AbstractInjector {
}


class StaticPropertyInjectorImpl extends common.AbstractStaticPropertyInjector {
}


class InstancePropertyInjectorImpl extends
common.AbstractInstancePropertyInjector {
}


class StaticMethodInjectorImpl extends common.AbstractStaticMethodInjector {
}


class InstanceMethodInjectorImpl extends common.AbstractInstanceMethodInjector {
}


export const incompleteInjector = new IncompleteInjectorImpl();


export const staticPropertyInjector = new StaticPropertyInjectorImpl();


export const instancePropertyInjector = new InstancePropertyInjectorImpl();


export const staticMethodInjector = new StaticMethodInjectorImpl();


export const instanceMethodInjector = new InstanceMethodInjectorImpl();


export const attr = 'attr';


export const propertyDescriptor = {

    initializer : null
};


export const initializedPropertyDescriptor = {

    initializer : function () {}
};


export const methodDescriptor = {

    value : function () {}
};


export class targetClass {}


export const targetInstance = {};

