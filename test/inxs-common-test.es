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


describe('Incomplete Injector',
function ()
{
    describe('#canInject()',
    function ()
    {
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
            assert.equal(fixtures.staticPropertyInjector.canInject(
                undefined, fixtures.attr, fixtures.propertyDescriptor
            ), false);

            assert.equal(fixtures.staticPropertyInjector.canInject(
                null, fixtures.attr, fixtures.propertyDescriptor
            ), false);

            assert.equal(fixtures.staticPropertyInjector.canInject(
                fixtures.targetInstance, fixtures.attr,
                fixtures.propertyDescriptor
            ), false);
        });

        it('must return false on wrong kind of attr',
        function ()
        {
            assert.equal(fixtures.staticPropertyInjector.canInject(
                fixtures.targetClass, undefined, fixtures.propertyDescriptor
            ), false);
        });

        it('must return false on wrong kind of descriptor',
        function ()
        {
            assert.expect(4);
            assert.equal(fixtures.staticPropertyInjector.canInject(
                fixtures.targetClass, fixtures.attr, undefined
            ), false);

            assert.equal(fixtures.staticPropertyInjector.canInject(
                fixtures.targetClass, fixtures.attr, null
            ), false);

            assert.equal(fixtures.staticPropertyInjector.canInject(
                fixtures.targetClass, fixtures.attr, fixtures.targetClass
            ), false);

            assert.equal(fixtures.staticPropertyInjector.canInject(
                fixtures.targetClass, fixtures.attr, fixtures.methodDescriptor
            ), false);
        });

        it('must return true when all requirements are met',
        function ()
        {
            assert.equal(fixtures.staticPropertyInjector.canInject(
                fixtures.targetClass, fixtures.attr,
                fixtures.propertyDescriptor
            ), true);
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
            assert.equal(fixtures.instancePropertyInjector.canInject(
                undefined, fixtures.attr, fixtures.propertyDescriptor
            ), false);

            assert.equal(fixtures.instancePropertyInjector.canInject(
                null, fixtures.attr, fixtures.propertyDescriptor
            ), false);

            assert.equal(fixtures.instancePropertyInjector.canInject(
                fixtures.targetClass, fixtures.attr,
                fixtures.propertyDescriptor
            ), false);
        });

        it('must return false on wrong kind of attr',
        function ()
        {
            assert.equal(fixtures.instancePropertyInjector.canInject(
                fixtures.targetInstance, undefined,
                fixtures.propertyDescriptor
            ), false);
        });

        it('must return false on wrong kind of descriptor',
        function ()
        {
            assert.expect(4);
            assert.equal(fixtures.instancePropertyInjector.canInject(
                fixtures.targetInstance, fixtures.attr, undefined
            ), false);

            assert.equal(fixtures.instancePropertyInjector.canInject(
                fixtures.targetInstance, fixtures.attr, null
            ), false);

            assert.equal(fixtures.instancePropertyInjector.canInject(
                fixtures.targetInstance, fixtures.attr, fixtures.targetClass
            ), false);

            assert.equal(fixtures.instancePropertyInjector.canInject(
                fixtures.targetInstance, fixtures.attr,
                fixtures.methodDescriptor
            ), false);
        });

        it('must return true when all requirements are met',
        function ()
        {
            assert.equal(fixtures.instancePropertyInjector.canInject(
                fixtures.targetInstance, fixtures.attr,
                fixtures.propertyDescriptor
            ), true);
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
            assert.equal(fixtures.staticMethodInjector.canInject(
                undefined, fixtures.attr, fixtures.methodDescriptor
            ), false);

            assert.equal(fixtures.staticMethodInjector.canInject(
                null, fixtures.attr, fixtures.methodDescriptor
            ), false);

            assert.equal(fixtures.staticMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr,
                fixtures.methodDescriptor
            ), false);
        });

        it('must return false on wrong kind of attr',
        function ()
        {
            assert.equal(fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, undefined, fixtures.methodDescriptor
            ), false);
        });

        it('must return false on wrong kind of descriptor',
        function ()
        {
            assert.expect(4);
            assert.equal(fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, undefined
            ), false);

            assert.equal(fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, null
            ), false);

            assert.equal(fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, fixtures.targetClass
            ), false);

            assert.equal(fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, fixtures.propertyDescriptor
            ), false);
        });

        it('must return false on wrongly configured descriptor',
        function ()
        {
            assert.expect(3);
            assert.equal(fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, {}
            ), false);

            assert.equal(fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, { value : null }
            ), false);

            assert.equal(fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, { value : {} }
            ), false);
        });

        it('must return true when all requirements are met',
        function ()
        {
            assert.equal(true, fixtures.staticMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, fixtures.methodDescriptor
            ), true);
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
            assert.equal(fixtures.instanceMethodInjector.canInject(
                undefined, fixtures.attr, fixtures.methodDescriptor
            ), false);

            assert.equal(fixtures.instanceMethodInjector.canInject(
                null, fixtures.attr, fixtures.methodDescriptor
            ), false);

            assert.equal(fixtures.instanceMethodInjector.canInject(
                fixtures.targetClass, fixtures.attr, fixtures.methodDescriptor
            ), false);
        });

        it('must return false on wrong kind of attr',
        function ()
        {
            assert.equal(fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, undefined, fixtures.methodDescriptor
            ), false);
        });

        it('must return false on wrong kind of descriptor',
        function ()
        {
            assert.expect(4);
            assert.equal(fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr, undefined
            ), false);

            assert.equal(fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr, null
            ), false);

            assert.equal(fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr, fixtures.targetClass
            ), false);

            assert.equal(fixtures.staticMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr,
                fixtures.propertyDescriptor
            ), false);
        });

        it('must return false on wrongly configured descriptor',
        function ()
        {
            assert.expect(3);
            assert.equal(fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr, {}
            ), false);

            assert.equal(fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr, { value : null }
            ), false);

            assert.equal(fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr, { value : {} }
            ), false);
        });

        it('must return true when all requirements are met',
        function ()
        {
            assert.equal(fixtures.instanceMethodInjector.canInject(
                fixtures.targetInstance, fixtures.attr,
                fixtures.methodDescriptor
            ), true);
        });
    });
});

