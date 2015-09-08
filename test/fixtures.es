// TBD:FILEHEADER

import * as common from '../src/inxs-common.es';


class StaticPropertyInjectorImpl extends common.AbstractStaticPropertyInjector {
}


class InstancePropertyInjectorImpl extends
common.AbstractInstancePropertyInjector {
}


class StaticMethodInjectorImpl extends common.AbstractStaticMethodInjector {
}


class InstanceMethodInjectorImpl extends common.AbstractInstanceMethodInjector {
}


export const incompleteInjector = new common.AbstractInjector();


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


export const singleParamMethodDescriptor = {

    value : function (param) {}
};


export class targetClass {}


export const targetInstance = new targetClass();


export const testIface = ['testIface'];


export const testIfaces = ['testIface1', 'testIface2'];

