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


import * as assertions from './assertions';
import * as messages from './messages';


/**
 * The abstract class AbstractInjector models the root of a hierarchy of
 * classes.
 *
 * TODO:document
 */
export class AbstractInjector
{
	/**
	 * TODO:document
	 *
	 * @param {Function|Object} target - the target object or function
	 * @param {String} attr - the target's attribute
	 * @param {Object<PropertyDescriptor|MethodDescriptor>} descriptor -
     * the descriptor
	 * @returns {Boolean}
	 */
	/*eslint no-unused-vars:0*/
    canInject(target, attr, descriptor)
	{
        throw new Error(messages.MSG_DERIVED_CLASSES_MUST_OVERRIDE);
    }

	/**
	 * TODO:document
	 *
	 * @param {Function|Object} target - the target object or function
	 * @param {String} attr - the target's attribute
	 * @param {Object<PropertyDescriptor|MethodDescriptor>} descriptor -
     * the descriptor
	 * @param {Array<String|Function>} ifaces - the interfaces to inject
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
 */
export class AbstractStaticPropertyInjector extends AbstractInjector
{
    canInject(target, attr, descriptor)
	{
        return typeof target == 'function' &&
			descriptor !== null &&
			typeof descriptor == 'object' &&
			typeof attr == 'string';
    }
}


/**
 * The abstract class AbstractInstancePropertyInjector models the root of a
 * hierarchy of classes representing instance property injectors.
 */
export class AbstractInstancePropertyInjector extends AbstractInjector
{
    canInject(target, attr, descriptor)
	{
        return target !== null &&
			typeof target == 'object' &&
			descriptor !== null &&
			typeof descriptor == 'object' &&
			typeof attr == 'string';
	}
}


/**
 * The abstract class AbstractStaticMethodInjector models the root of a
 * hierarchy of classes representing static method level parameter injectors.
 */
export class AbstractStaticMethodInjector extends AbstractInjector
{
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
 */
export class AbstractInstanceMethodInjector extends AbstractInjector
{
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

