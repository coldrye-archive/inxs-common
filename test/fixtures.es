// vim: expandtab:ts=4:sw=4
/*
 * Copyright 2015 Carsten Klein
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import * as common from '../src/inxs-common';


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

    /*eslint no-unused-vars:0*/
    value : function (param) {}
};


export class targetClass {}


export const targetInstance = new targetClass();


export const testIface = ['testIface'];


export const testIfaces = ['testIface1', 'testIface2'];

