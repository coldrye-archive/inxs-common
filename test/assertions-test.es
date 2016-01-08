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


import assert from 'esaver';

import * as fixtures from './fixtures';

import * as assertions from '../src/assertions';
import InjectionError from '../src/exceptions';


describe('assertNotInitialized()',
function ()
{
    it('must throw on initialized property',
    function ()
    {
        assert.expect(1);
        assert.throws(
        function ()
        {
            assertions.assertNotInitialized(
                fixtures.targetInstance, fixtures.attr,
                fixtures.initializedPropertyDescriptor, fixtures.testIface
            );
        }, InjectionError);
    });

    it('must not throw on non initialized instance property',
    function ()
    {
        assert.expect(1);
        assert.doesNotThrow(
        function ()
        {
            assertions.assertNotInitialized(
                fixtures.targetInstance, fixtures.attr,
                fixtures.propertyDescriptor, fixtures.testIface
            );
        });
    });
});


describe('assertSingleInterface()',
function ()
{
    it('must throw on multiple interfaces for instance property',
    function ()
    {
        assert.expect(1);
        assert.throws(
        function ()
        {
            assertions.assertSingleInterfaceOnly(
                fixtures.targetInstance, fixtures.attr,
                fixtures.propertyDescriptor, fixtures.testIfaces
            );
        }, InjectionError);
    });

    it('must not throw on single interface for instance property',
    function ()
    {
        assert.expect(1);
        assert.doesNotThrow(
        function ()
        {
            assertions.assertSingleInterfaceOnly(
                fixtures.targetInstance, fixtures.attr,
                fixtures.propertyDescriptor, fixtures.testIface
            );
        });
    });
});


describe('assertFormalParametersMatch()',
function ()
{
    it('must throw on non matching parameters for method',
    function ()
    {
        assert.expect(1);
        assert.throws(
        function ()
        {
            assertions.assertFormalParametersMatch(
                fixtures.targetInstance, fixtures.attr,
                fixtures.methodDescriptor, fixtures.testIface
            );
        }, InjectionError);
    });

    it('must not throw on matching parameters for method',
    function ()
    {
        assert.expect(1);
        assert.doesNotThrow(
        function ()
        {
            assertions.assertFormalParametersMatch(
                fixtures.targetInstance, fixtures.attr,
                fixtures.singleParamMethodDescriptor, fixtures.testIface
            );
        });
    });
});

