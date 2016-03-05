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


import {
    AbstractConstructorInjector,
    AbstractStaticPropertyInjector, AbstractStaticMethodInjector,
    AbstractInstancePropertyInjector, AbstractInstanceMethodInjector
} from '../src/injectors';

import * as fixtures from './fixtures';


class Target {}


describe('AbstractStaticPropertyInjector',
function ()
{
    class StaticPropertyInjectorImpl extends AbstractStaticPropertyInjector
    {
        inject()
        {}
    }

    const cut = new StaticPropertyInjectorImpl();

    describe('#canInject()',
    function ()
    {
        it('must return false on wrong kind of target',
        function ()
        {
            cut.canInject(
                undefined, 'attr', fixtures.propertyDataDescriptor
            ).should.not.be.ok;

            cut.canInject(
                null, 'attr', fixtures.propertyDataDescriptor
            ).should.not.be.ok;

            cut.canInject(
                {}, 'attr', fixtures.propertyDataDescriptor
            ).should.not.be.ok;
        });

        it('must return false on wrong kind of attr',
        function ()
        {
            cut.canInject(
                Target, undefined, fixtures.propertyDataDescriptor
            ).should.not.be.ok;
        });

        it('must return false on wrong kind of descriptor',
        function ()
        {
            cut.canInject(Target, 'attr', undefined).should.not.be.ok;
            cut.canInject(Target, 'attr', null).should.not.be.ok;
            cut.canInject(
                Target, 'attr', fixtures.methodDescriptor
            ).should.not.be.ok;
        });

        it('must return true when all requirements are met',
        function ()
        {
            cut.canInject(
                Target, 'attr', fixtures.propertyDataDescriptor
            ).should.be.ok;
        });
    });
});


describe('AbstractInstancePropertyInjector',
function ()
{
    class InstancePropertyInjectorImpl extends AbstractInstancePropertyInjector
    {
        inject()
        {}
    }

    const cut = new InstancePropertyInjectorImpl();

    describe('#canInject()',
    function ()
    {
        it('must return false on wrong kind of target',
        function ()
        {
            cut.canInject(
                undefined, 'attr', fixtures.propertyDataDescriptor
            ).should.not.be.ok;

            cut.canInject(
                null, 'attr', fixtures.propertyDataDescriptor
            ).should.not.be.ok;

            cut.canInject(
                Target, 'attr', fixtures.propertyDataDescriptor
            ).should.not.be.ok;
        });

        it('must return false on wrong kind of attr',
        function ()
        {
            cut.canInject(
                {}, undefined, fixtures.propertyDataDescriptor
            ).should.not.be.ok;
        });

        it('must return false on wrong kind of descriptor',
        function ()
        {
            cut.canInject({}, 'attr', undefined).should.not.be.ok;
            cut.canInject({}, 'attr', null).should.not.be.ok;
            cut.canInject({}, 'attr', Target).should.not.be.ok;
            cut.canInject(
                {}, 'attr', fixtures.methodDescriptor
            ).should.not.be.ok;
        });

        it('must return true when all requirements are met',
        function ()
        {
            cut.canInject(
                {}, 'attr', fixtures.propertyDataDescriptor
            ).should.be.ok;
        });
    });
});


describe('AbstractStaticMethodInjector',
function ()
{
    class StaticMethodInjectorImpl extends AbstractStaticMethodInjector
    {
        inject()
        {}
    }

    const cut = new StaticMethodInjectorImpl();

    describe('#canInject()',
    function ()
    {
        it('must return false on wrong kind of target',
        function ()
        {
            cut.canInject(
                undefined, 'attr', fixtures.methodDescriptor
            ).should.not.be.ok;

            cut.canInject(
                null, 'attr', fixtures.methodDescriptor
            ).should.not.be.ok;

            cut.canInject(
                {}, 'attr', fixtures.methodDescriptor
            ).should.not.be.ok;
        });

        it('must return false on wrong kind of attr',
        function ()
        {
            cut.canInject(
                Target, undefined, fixtures.methodDescriptor
            ).should.not.be.ok;
        });

        it('must return false on wrong kind of descriptor',
        function ()
        {
            cut.canInject(Target, 'attr', undefined).should.not.be.ok;
            cut.canInject(Target, 'attr', null).should.not.be.ok;
            cut.canInject(Target, 'attr', Target).should.not.be.ok;
            cut.canInject(
                Target, 'attr', fixtures.propertyDataDescriptor
            ).should.not.be.ok;
        });

        it('must return false on wrongly configured descriptor',
        function ()
        {
            cut.canInject(Target, 'attr', {}).should.not.be.ok;
            cut.canInject(Target, 'attr', {value:null}).should.not.be.ok;
            cut.canInject(Target, 'attr', {value:{}}).should.not.be.ok;
        });

        it('must return true when all requirements are met',
        function ()
        {
            cut.canInject(
                Target, 'attr', fixtures.methodDescriptor
            ).should.be.ok;
        });
    });
});


describe('AbstractInstanceMethodInjector',
function ()
{
    class InstanceMethodInjectorImpl extends AbstractInstanceMethodInjector
    {
        inject()
        {}
    }

    const cut = new InstanceMethodInjectorImpl();

    describe('#canInject()',
    function ()
    {
        it('must return false on wrong kind of target',
        function ()
        {
            cut.canInject(
                undefined, 'attr', fixtures.methodDescriptor
            ).should.not.be.ok;

            cut.canInject(
                null, 'attr', fixtures.methodDescriptor
            ).should.not.be.ok;

            cut.canInject(
                Target, 'attr', fixtures.methodDescriptor
            ).should.not.be.ok;
        });

        it('must return false on wrong kind of attr',
        function ()
        {
            cut.canInject(
                {}, undefined, fixtures.methodDescriptor
            ).should.not.be.ok;
        });

        it('must return false on wrong kind of descriptor',
        function ()
        {
            cut.canInject({}, 'attr', undefined).should.not.be.ok;
            cut.canInject({}, 'attr', null).should.not.be.ok;
            cut.canInject({}, 'attr', Target).should.not.be.ok;
            cut.canInject(
                {}, 'attr', fixtures.propertyDataDescriptor
            ).should.not.be.ok;
        });

        it('must return false on wrongly configured descriptor',
        function ()
        {
            cut.canInject({}, 'attr', {}).should.not.be.ok;
            cut.canInject({}, 'attr', {value:null}).should.not.be.ok;
            cut.canInject({}, 'attr', {value:{}}).should.not.be.ok;
        });

        it('must return true when all requirements are met',
        function ()
        {
            cut.canInject({}, 'attr', fixtures.methodDescriptor).should.be.ok;
        });
    });
});


describe('AbstractConstructorInjector',
function ()
{
    class ConstructorInjectorImpl extends AbstractConstructorInjector
    {
        inject()
        {}
    }

    const cut = new ConstructorInjectorImpl();

    describe('#canInject()',
    function ()
    {
        it('must return false on non class target',
        function ()
        {
            cut.canInject({}).should.not.be.ok;
        });

        it('must return true on class target',
        function ()
        {
            class Test
            {}

            cut.canInject(Test).should.be.ok;
        });
    });
});

