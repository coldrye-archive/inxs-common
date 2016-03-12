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


import * as assertions from '../src/assertions';
import InjectionError from '../src/exceptions';

import * as fixtures from './fixtures';


describe('assertNotInitialized()',
function ()
{
    it('must throw on initialized property',
    function ()
    {
        function tc()
        {
            assertions.assertNotInitialized({
                target:{},
                attr:fixtures.attr,
                descriptor:fixtures.initializedPropertyDescriptor,
                ifaces:fixtures.testIface
            });
        }
        tc.should.throw(InjectionError);
    });

    it('must not throw on non initialized instance property',
    function ()
    {
        function tc()
        {
            assertions.assertNotInitialized({
                target:{},
                attr:fixtures.attr,
                descriptor:fixtures.propertyDataDescriptor,
                ifaces:fixtures.testIface
            });
        }
        tc.should.not.throw(InjectionError);
    });
});


describe('assertSingleInterface()',
function ()
{
    it('must throw on multiple interfaces for instance property',
    function ()
    {
        function tc()
        {
            assertions.assertSingleInterfaceOnly({
                target:{},
                attr:fixtures.attr,
                descriptor:fixtures.propertyDataDescriptor,
                ifaces:fixtures.testIfaces
            });
        }
        tc.should.throw(InjectionError);
    });

    it('must not throw on single interface for instance property',
    function ()
    {
        function tc()
        {
            assertions.assertSingleInterfaceOnly({
                target:{},
                attr:fixtures.attr,
                descriptor:fixtures.propertyDataDescriptor,
                ifaces:fixtures.testIface
            });
        }
        tc.should.not.throw(InjectionError);
    });
});


describe('assertFormalParametersMatch()',
function ()
{
    it('must throw on non matching parameters for constructor',
    function ()
    {
        function tc()
        {
            assertions.assertFormalParametersMatch({
                /*eslint no-unused-vars:0*/
                target: function (injected) {},
                ifaces:['iface1', 'iface2']
            });
        }
        tc.should.throw(InjectionError);
    });

    it('must not throw on matching parameters for constructor',
    function ()
    {
        function tc()
        {
            assertions.assertFormalParametersMatch({
                target: function (injected, param1) {},
                ifaces:['iface1']
            });
        }
        tc.should.not.throw(InjectionError);
    });

    it('must throw on non matching parameters for method',
    function ()
    {
        function tc()
        {
            assertions.assertFormalParametersMatch({
                target:{},
                attr:fixtures.attr,
                descriptor:fixtures.methodDescriptor,
                ifaces:fixtures.testIface
            });
        }
        tc.should.throw(InjectionError);
    });

    it('must not throw on matching parameters for method',
    function ()
    {
        function tc()
        {
            assertions.assertFormalParametersMatch({
                target:{},
                attr:fixtures.attr,
                descriptor:fixtures.singleParamMethodDescriptor,
                ifaces:fixtures.testIface
            });
        }
        tc.should.not.throw(InjectionError);
    });
});

