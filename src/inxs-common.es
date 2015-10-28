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


import * as messages from './messages';


/**
 * The abstract class AbstractInjector models the root of a hierarchy of
 * classes.
 *
 * @public
 */
export class AbstractInjector
{
    /**
     * Checks whether this is able to handle the injection request.
     *
     * @abstract
     * @param {TargetType} target - the target object or function
     * @param {string} attr - the target's attribute
     * @param {DescriptorType} descriptor - the descriptor
     * @returns {boolean} - true whether this can handle the request,
     * false otherwise
     */
    /*eslint no-unused-vars:0*/
    canInject(target, attr, descriptor)
    {
        throw new Error(messages.MSG_DERIVED_CLASSES_MUST_OVERRIDE);
    }

    /**
     * Instructs this to inject the specified interfaces ifaces into
     * the specified target's attribute ``attr`` or as parameters into
     * the specified target's method ``attr``.
     *
     * @abstract
     * @param {TargetType} target - the target object or function
     * @param {string} attr - the target's attribute
     * @param {DescriptorType} descriptor - the descriptor
     * @param {Array<InterfaceType>} ifaces - the interfaces to inject
     * @throws {InjectionError}
     * @returns {void}
     */
    /*eslint no-unused-vars:0*/
    inject(target, attr, descriptor, ifaces)
    {
        throw new Error(messages.MSG_DERIVED_CLASSES_MUST_OVERRIDE);
    }
}


/**
 * The abstract class AbstractStaticPropertyInjector models the root of a
 * hierarchy of classes representing static property injectors.
 *
 * @public
 * @extends {AbstractInjector}
 */
export class AbstractStaticPropertyInjector extends AbstractInjector
{
    /**
     * @override
     */
    canInject(target, attr, descriptor)
    {
        return typeof target == 'function' &&
            descriptor !== null &&
            typeof descriptor == 'object' &&
            typeof attr == 'string' &&
            !descriptor.value;
    }
}


/**
 * The abstract class AbstractInstancePropertyInjector models the root of a
 * hierarchy of classes representing instance property injectors.
 *
 * @public
 * @extends {AbstractInjector}
 */
export class AbstractInstancePropertyInjector extends AbstractInjector
{
    /**
     * @override
     */
    canInject(target, attr, descriptor)
    {
        return target !== null &&
            typeof target == 'object' &&
            descriptor !== null &&
            typeof descriptor == 'object' &&
            typeof attr == 'string' &&
            !descriptor.value;
    }
}


/**
 * The abstract class AbstractStaticMethodInjector models the root of a
 * hierarchy of classes representing static method level parameter injectors.
 *
 * @public
 * @extends {AbstractInjector}
 */
export class AbstractStaticMethodInjector extends AbstractInjector
{
    /**
     * @override
     */
    canInject(target, attr, descriptor)
    {
        return typeof target == 'function' &&
            descriptor !== null &&
            typeof descriptor == 'object' &&
            typeof attr == 'string' &&
            typeof descriptor.value == 'function';
    }
}


/**
 * The abstract class AbstractInstanceMethodInjector models the root of a
 * hierarchy of classes representing instance method level parameter injectors.
 *
 * @public
 * @extends {AbstractInjector}
 */
export class AbstractInstanceMethodInjector extends AbstractInjector
{
    /**
     * @override
     */
    canInject(target, attr, descriptor)
    {
        return target !== null &&
            typeof target == 'object' &&
            descriptor !== null &&
            typeof descriptor == 'object' &&
            typeof attr == 'string' &&
            typeof descriptor.value == 'function';
    }
}


/**
 * @typedef {(function|string|Symbol)} InterfaceType
 */


/**
 * @typedef {(MethodDescriptorType|PropertyDescriptorType)} DescriptorType
 */


/**
 * The property descriptor provided by the babel runtime.
 *
 * @typedef {Object} PropertyDescriptorType
 */


/**
 * The method descriptor provided by the babel runtime.
 *
 * @typedef {Object} MethodDescriptorType
 * @property {function} value the method
 */


/**
 * @typedef {(function|Object)} TargetType
 */

