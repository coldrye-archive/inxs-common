// vim: expandtab:ts=4:sw=4
/*
 * Copyright 2015-2016 Carsten Klein
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


import * as common from '../src/injectors';


export const accessorPropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get: function () {},
    /*eslint no-unused-vars:0*/
    set: function (v) {}
};


export const accessorPropertyDescriptor2 = {
    configurable: true,
    enumerable: true,
    /*eslint no-unused-vars:0*/
    set: function (v) {}
};


export const initializedPropertyDescriptor = {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer : function () {}
};


export const propertyDataDescriptor = {
    configurable: true,
    enumerable: true,
    writable: true,
    value : 5
};


export const methodDescriptor = {
    configurable: true,
    enumerable: true,
    writable: true,
    value : function () {}
};


export const singleParamMethodDescriptor = {
    configurable: true,
    enumerable: true,
    writable: true,
    /*eslint no-unused-params:0*/
    value : function (param) {}
};


export const testIface = ['testIface'];


export const testIfaces = ['testIface1', 'testIface2'];

