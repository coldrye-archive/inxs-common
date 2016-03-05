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


import {abstract} from 'core-decorators';

import
{
    isAccessorPropertyDescriptor, isPropertyDataDescriptor, isMethodDescriptor
} from 'pingo-common/guards';


/**
 * The abstract class AbstractInjector models the root of a hierarchy of
 * classes.
 *
 * @abstract
 */
@abstract
export class AbstractInjector
{
    /**
     * Returns true whether this is able to handle the injection request.
     *
     * @abstract
     * @param {TargetType} target - the target object or function
     * @param {String} attr - the target's attribute
     * @param {DescriptorType} descriptor - the descriptor
     * @returns {Boolean} - true whether this can handle the request,
     * false otherwise
     */
    /*eslint no-unused-vars:0*/
    /* istanbul ignore next */
    @abstract
    canInject(target, attr, descriptor)
    {}

    /**
     * Instructs this to inject according to the specified injection descriptor.
     *
     * @abstract
     * @param {InjectionDescriptor} injectionDescriptor - the injection descriptor
     * @throws {InjectionError}
     * @returns {void}
     */
    /*eslint no-unused-vars:0*/
    /* istanbul ignore next */
    @abstract
    inject(injectionDescriptor)
    {}
}


/**
 * The class AbstractConstructorInjector models the root of a hierarchy of
 * classes representing constructor parameter injectors.
 */
@abstract
export class AbstractConstructorInjector extends AbstractInjector
{
    /**
     * @override
     */
    canInject(target, attr, descriptor)
    {
        return typeof target == 'function'
               && attr == undefined
               && descriptor == undefined;
    }
}


/**
 * The abstract class AbstractStaticPropertyInjector models the root of a
 * hierarchy of classes representing static property injectors.
 *
 * @abstract
 */
@abstract
export class AbstractStaticPropertyInjector extends AbstractInjector
{
    /**
     * @override
     */
    canInject(target, attr, descriptor)
    {
        return typeof target == 'function'
               && typeof attr == 'string'
               && (isAccessorPropertyDescriptor(descriptor)
               || isPropertyDataDescriptor(descriptor));
    }
}


/**
 * The abstract class AbstractInstancePropertyInjector models the root of a
 * hierarchy of classes representing instance property injectors.
 *
 * @abstract
 */
@abstract
export class AbstractInstancePropertyInjector extends AbstractInjector
{
    /**
     * @override
     */
    canInject(target, attr, descriptor)
    {
        return target !== null
               && typeof target == 'object'
               && typeof attr == 'string'
               && (isAccessorPropertyDescriptor(descriptor)
               || isPropertyDataDescriptor(descriptor));
    }
}


/**
 * The abstract class AbstractStaticMethodInjector models the root of a
 * hierarchy of classes representing static method level parameter injectors.
 *
 * @abstract
 */
@abstract
export class AbstractStaticMethodInjector extends AbstractInjector
{
    /**
     * @override
     */
    canInject(target, attr, descriptor)
    {
        return typeof target == 'function'
               && typeof attr == 'string'
               && isMethodDescriptor(descriptor);
    }
}


/**
 * The abstract class AbstractInstanceMethodInjector models the root of a
 * hierarchy of classes representing instance method level parameter injectors.
 *
 * @abstract
 */
@abstract
export class AbstractInstanceMethodInjector extends AbstractInjector
{
    /**
     * @override
     */
    canInject(target, attr, descriptor)
    {
        return target !== null
               && typeof target == 'object'
               && typeof attr == 'string'
               && isMethodDescriptor(descriptor);
    }
}


/**
 * TODO:rename to DiscriminatorType
 * @typedef {(Class|String|Symbol)} InterfaceType
 */


/**
 * TODO:external
 * @typedef {(MethodDescriptorType|PropertyDescriptorType)} DescriptorType
 */


/**
 * TODO:external
 * The property descriptor provided by the babel runtime.
 *
 * @typedef {Object} PropertyDescriptorType
 * @property {Boolean} customizable
 * @property {Boolean} enumerable
 * @property {Boolean} writable
 * @property {Function} get
 * @property {Function} set
 * @property {Function} initializer
 */


/**
 * TODO:external
 * The method descriptor provided by the babel runtime.
 *
 * @typedef {Object} MethodDescriptorType
 * @property {Boolean} customizable
 * @property {Boolean} enumerable
 * @property {Function} value - the method
 */


/**
 * TODO:external
 * @typedef {(Function|Object)} TargetType
 */


/**
 * TODO:external
 * The injection descriptor.
 *
 * @typedef {Object} InjectionDescriptor
 * @property {TargetType} target
 * @property {String} attr
 * @property {DescriptorType} descriptor
 * @property {Array<InterfaceType>} ifaces
 */

