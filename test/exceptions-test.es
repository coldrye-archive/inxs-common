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

import * as exceptions from '../src/exceptions';


describe('InjectionError', function ()
{
	it('get data must return correct value when set', function ()
	{
		const data = 1;
		const cut = new exceptions.InjectionError('msg', data);
		assert.equal(cut.data, data);
	});

	it('get data must return null when not set', function ()
	{
		const cut = new exceptions.InjectionError('msg');
		assert.equal(cut.data, null);
	});
});

