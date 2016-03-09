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


/**
 * The broker.
 *
 * @typedef {Object} BrokerType 
 * @property {function(iface: InterfaceType): Object} getInstance
 * @property {LoggerType} [logger]
 * @property {function(ifaces: Array<InterfaceType>): boolean} [validateInterfaces]
 */


/**
 * The logger.
 *
 * @typedef {Object} LoggerType
 * @property {function(message: string, data: *): void} info
 * @property {function(message: string, data: *): void} warn
 * @property {function(message: string, data: *): void} debug
 * @property {function(message: string, data: *): void} error
 */


/**
 * The injection descriptor.
 *
 * @typedef {Object} InjectionDescriptorType
 * @property {TargetType} target
 * @property {String} attr
 * @property {DescriptorType} descriptor
 * @property {Array<InterfaceType>} ifaces
 */


/**
 * TODO:rename to DiscriminatorType
 * @typedef {(Class|String|Symbol)} InterfaceType
 */


/**
 * TODO:external pingo
 * @typedef {(MethodDescriptorType|PropertyDescriptorType)} DescriptorType
 */


/**
 * TODO:external pingo
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
 * TODO:external pingo
 * The method descriptor provided by the babel runtime.
 *
 * @typedef {Object} MethodDescriptorType
 * @property {Boolean} customizable
 * @property {Boolean} enumerable
 * @property {Function} value - the method
 */


/**
 * TODO:external pingo
 * @typedef {(Function|Object)} TargetType
 */

