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


import * as assert from 'assert';

import * as fixtures from './fixtures';

import * as util from '../src/util';


describe('className()', function ()
{
	it('must throw on invalid target', function ()
	{
		assert.throws(function () {
			util.className(null);
		}, TypeError);

		assert.throws(function () {
			util.className(undefined);
		}, TypeError);
	});

	it('must return name of class', function ()
	{
		assert.equal(util.className(fixtures.targetClass), 'targetClass');
	});

	it('must return name of instance of class', function ()
	{
		assert.equal(util.className(fixtures.targetInstance), 'targetClass');
	});
});

