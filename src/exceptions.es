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


import EsError from 'esbases/error';


/**
 * The class InjectionError is thrown by injectors in case of failure.
 */
export default class InjectionError extends EsError
{
    /**
     * @param {string} message - the message
     * @param {Object} options - the optional parameters
     * @param {Error} options.cause - the optional cause
     * @param {*} options.data - the optional data
     */
    constructor(message, {data, cause} = {})
    {
        super(message, cause);

        this._data = data;
    }

    /**
     * Gets the data.
     *
     * @type {*}
     */
    get data()
    {
        return this._data;
    }
}

