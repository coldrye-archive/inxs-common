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

import * as sprintf from 'sprintf-js';

import * as exceptions from './exceptions';
import * as messages from './messages';
import * as util from './util';


/**
 * Asserts that the specified property descriptor does not define an
 * initializer.
 *
 * @param {Function|Object} target - the target object or function
 * @param {String} attr - the target's attribute
 * @param {Object<PropertyDescriptor>} descriptor - the descriptor
 * @param {Array<String|Function>} ifaces - the interfaces to inject
 * @throws {InjectionError}
 * @returns {void}
 */
export function assertNotInitialized(target, attr, descriptor, ifaces)
{
    if (typeof descriptor.initializer == 'function')
	{
		_doThrow
		(
			messages.MSG_UNABLE_TO_INJECT_INITIALIZED,
			target, attr, descriptor, ifaces
		);
    }
}


/**
 * Asserts that the user tries to inject a single interface only.
 *
 * @param {Function|Object} target - the target object or function
 * @param {String} attr - the target's attribute
 * @param {Object<PropertyDescriptor>} descriptor - the descriptor
 * @param {Array<String|Function>} ifaces - the interfaces to inject
 * @throws {InjectionError}
 * @returns {void}
 */
export function assertSingleInterfaceOnly(target, attr, descriptor, ifaces)
{
    if (ifaces.length > 1)
	{
		_doThrow (
			messages.MSG_SINGLE_INFACE_ONLY,
			target, attr, descriptor, ifaces
		);
    }
}


/**
 * Asserts that the number of formal parameter of the method is equal to
 * or greater than the number of interfaces injected.
 *
 * @param {Function|Object} target - the target object or function
 * @param {String} attr - the target's attribute
 * @param {Object<PropertyDescriptor>} descriptor - the descriptor
 * @param {Array<String|Function>} ifaces - the interfaces to inject
 * @throws {InjectionError}
 * @returns {void}
 */
export function assertFormalParametersMatch(
	target, attr, descriptor, ifaces
)
{
    if (descriptor.value.length < ifaces.length)
	{
		_doThrow (
			messages.MSG_FORMAL_PARAMETERS_DO_NOT_MATCH,
			target, attr, descriptor, ifaces
		);
    }
}


/**
 * Internal helper for throwing an injection error.
 *
 * @param {String} message
 * @param {Function|Object} target - the target object or function
 * @param {String} attr - the target's attribute
 * @param {Object<PropertyDescriptor>} descriptor - the descriptor
 * @param {Array<String|Function>} ifaces - the interfaces to inject
 * @throws {InjectionError}
 * @returns {void}
 */
function _doThrow(message, target, attr, descriptor, ifaces)
{
	const targetName = util.targetName(target);

	throw new exceptions.InjectionError(
		sprintf.sprintf(message, targetName, attr),
		{
			target : targetName,
			attr : attr,
			descriptor : descriptor,
			interfaces : ifaces
		}
	);
}

