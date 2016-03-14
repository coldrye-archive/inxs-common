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
 * @property {function(message: String, data: *): void} info
 * @property {function(message: String, data: *): void} warn
 * @property {function(message: String, data: *): void} debug
 * @property {function(message: String, data: *): void} error
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
 * @typedef {(Class|String|Symbol)} InterfaceType
 */


/**
 * @typedef {(MethodDescriptorType|PropertyDescriptorType)} DescriptorType
 */


/**
 * @typedef {AccessorPropertyDescriptorType|PropertyDataDescriptorType} PropertyDescriptorType
 */


/**
 * @external {AccessorPropertyDescriptorType} http://pingo.es.coldrye.eu/projects/pingo-common/doc/public/typedef/index.html#static-typedef-AccessorPropertyDescriptorType
 */


/**
 * @external {PropertyDataDescriptorType} http://pingo.es.coldrye.eu/projects/pingo-common/doc/public/typedef/index.html#static-typedef-PropertyDataDescriptorType
 */


/**
 * @external {MethodDescriptorType} http://pingo.es.coldrye.eu/projects/pingo-common/doc/public/typedef/index.html#static-typedef-MethodDescriptorType
 */


/**
 * @external {TargetType} http://pingo.es.coldrye.eu/projects/pingo-common/doc/public/typedef/index.html#static-typedef-TargetType
 */

