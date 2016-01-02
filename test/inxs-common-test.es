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


import assert from 'esaver';

import * as fixtures from './fixtures';


describe('Incomplete Injector',
function ()
{
    describe('#canInject()',
    function ()
    {
        assert.expect(1);
        it('must throw without being overridden',
        function ()
        {
            assert.throws(
            function ()
            {
                fixtures.incompleteInjector.canInject();
            }, Error);
        });
    });

    describe('#inject()',
    function ()
    {
        assert.expect(1);
        it('must throw without being overridden',
        function ()
        {
            assert.throws(
            function ()
            {
                fixtures.incompleteInjector.inject();
            }, Error);
        });
    });
});


describe('AbstractStaticPropertyInjector',
function ()
{
    describe('#canInject()',
    function ()
    {
        it('must return false on wrong kind of target',
        function ()
        {
            assert.expect(3);
            assert.equal(false, fixtures.staticPropertyInjector.canInject(
                undefined, fixtures.attr, fixtures.propertyDescriptor
            ));

            assert.equal(false, fixtures.staticPropertyInjector.canInject(
                null, fixtures.attr, fixtures.propertyDescriptor
            ));

            assert.equal(false, fixtures.staticPropertyInjector.canInject(
                fixtures.targetInstance, fixtures.attr,
                fixtures.propertyDescriptor
            ));
        });

        it('must return false on wrong kind of attr',
        function ()
        {
            assert.expect(1);
            assert.equal(false, fixtures.staticPropertyInjector.canInject(
                fixtures.targetClass, undefined, fixtures.propertyDescriptor
            ));
        });

        it('must return false on wrong kind of descriptor',
        function ()
        {
            assert.expect(4);
            assert.equal(false, fixtures.staticPropertyInjector.canInject(
                fixtures.targetClass, fixtures.attr, undefined
            ));

            assert.equal(false, fixtures.staticPropertyInjector.canInject(
                fixtures.targetClass, fixtures.attr, null
            ));

            assert.equal(false, fixtures.staticPropertyInjector.canInject(
                fixtures.targetClass, fixtures.attr, fixtures.targetClass
            ));

            assert.equal(false, fixtures.staticPropertyInjector.canInject(
                fixtures.targetClass, fixtures.attr, fixtures.methodDescriptor
            ));
        });

        it('must return true when all requirements are met',
        function ()
        {
            assert.expect(1);
            assert.equal(true, fixtures.staticPropertyInjector.canInject(
                fixtures.targetClass, fixtures.attr,
                fixtures.propertyDescriptor
            ));
        });
    });
});


describe('AbstractInstancePropertyInjector',
function ()
{
    describe('#canInject()',
    function ()
    {
        it('must return false on wrong kind of target',
        function ()
        {
            assert.expect(3);
            assert.equal(false, fixtures.instancePropertyInjector.canInject(
                undefined, fixtures.attr, fixtures.propertyDescriptor
            ));

            assert.equal(false, fixtures.instancePropertyInjector.canInject(
                null, fixtures.attr, fixtures.propertyDescriptor
            ));

            assert.equal(false, fixtures.instancePropertyInjector.canInject(
                fixtures.targetClass, fixtures.attr,
                fixtures.propertyDescriptor
            ));
        });

        it('must return false on wrong kind of attr',
        function ()
        {
            assert.expect(1);
            assert.equal(false, fixtures.instancePropertyInjector.canInject(
                fixtures.targetInstance, undefined,
                fixtures.propertyDescriptor
            ));
        });

        it('must return false on wrong kind of descriptor',
        function ()
        {
            assert.expect(4);
            assert.equal(false, fixtures.instancePropertyInjector.canInject(
                fixtures.targetInstance, fixtures.attr, undefined
            ));

            assert.equal(false, fixtures.instancePropertyInjector.canInject(
                fixtures.targetInstance, fixtures.attr, null
            ));

            assert.equal(false, fixtures.instancePropertyInjector.canInject(
                fixtures.targetInstance, fixtures.attr, fixtures.targetClass
            ));

            assert.equal(false, fixtures.instancePropertyInjector.canInject(
                fixtures.targetInstance, fixtures.attr,
                fixtures.methodDescriptor
            ));
        });

        it('must return true when all requirements are met',
        function ()
        {
            assert.expect(1);
            assert.equal(true, fixtures.instancePropertyInjector.canInject(
                fixtures.targetInstance, fixtures.attr,
                fixtures.propertyDescriptor
            ));
        });
    });
});


describe('AbstractStaticMethodInjector',
function ()
{
    describe('#canInject()',
    function ()
    {
        it('must return false on wrong kind of target',
        function ()
        {
            assert.expect(3);
            assert.equal(false, fixtures.staticMethodInjector.canInject(
                undefined, fixtures.attr, fixtures.methodDescriptor
            ));

            assert.equal(false, fixtures.staticMethodInjector.canInject(
                null, fixtures.attr, fixtures.methodDescriptor
            ));

            assert.equal(false, fixtures.staticMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr,
                fixtures.methodDescriptor
            ));
        });

        it('must return false on wrong kind of attr',
        function ()
        {
            assert.expect(1);
            assert.equal(false, fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, undefined, fixtures.methodDescriptor
            ));
        });

        it('must return false on wrong kind of descriptor',
        function ()
        {
            assert.expect(4);
            assert.equal(false, fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, undefined
            ));

            assert.equal(false, fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, null
            ));

            assert.equal(false, fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, fixtures.targetClass
            ));

            assert.equal(false, fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, fixtures.propertyDescriptor
            ));
        });

        it('must return false on wrongly configured descriptor',
        function ()
        {
            assert.expect(3);
            assert.equal(false, fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, {}
            ));

            assert.equal(false, fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, { value : null }
            ));

            assert.equal(false, fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, { value : {} }
            ));
        });

        it('must return true when all requirements are met',
        function ()
        {
            assert.expect(1);
            assert.equal(true, fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, fixtures.methodDescriptor
            ));
        });
    });
});


describe('AbstractInstanceMethodInjector',
function ()
{
    describe('#canInject()',
    function ()
    {
        it('must return false on wrong kind of target',
        function ()
        {
            assert.expect(3);
            assert.equal(false, fixtures.instanceMethodInjector.canInject(
                undefined, fixtures.attr, fixtures.methodDescriptor
            ));

            assert.equal(false, fixtures.instanceMethodInjector.canInject(
                null, fixtures.attr, fixtures.methodDescriptor
            ));

            assert.equal(false, fixtures.instanceMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, fixtures.methodDescriptor
            ));
        });

        it('must return false on wrong kind of attr',
        function ()
        {
            assert.equal(false, fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, undefined, fixtures.methodDescriptor
            ));
        });

        it('must return false on wrong kind of descriptor',
        function ()
        {
            assert.expect(4);
            assert.equal(false, fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr, undefined
            ));

            assert.equal(false, fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr, null
            ));

            assert.equal(false, fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr, fixtures.targetClass
            ));

            assert.equal(false, fixtures.staticMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr,
                fixtures.propertyDescriptor
            ));
        });

        it('must return false on wrongly configured descriptor',
        function ()
        {
            assert.expect(3);
            assert.equal(false, fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr, {}
            ));

            assert.equal(false, fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr, { value : null }
            ));

            assert.equal(false, fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr, { value : {} }
            ));
        });

        it('must return true when all requirements are met',
        function ()
        {
            assert.expect(1);
            assert.equal(true, fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr,
                fixtures.methodDescriptor
            ));
        });
    });
});

