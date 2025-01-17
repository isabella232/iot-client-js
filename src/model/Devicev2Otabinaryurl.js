/**
 * Arduino IoT Cloud API
 *  Provides a set of endpoints to manage Arduino IoT Cloud **Devices**, **Things**, **Properties** and **Timeseries**. This API can be called just with any HTTP Client, or using one of these clients:  * [Javascript NPM package](https://www.npmjs.com/package/@arduino/arduino-iot-client)  * [Python PYPI Package](https://pypi.org/project/arduino-iot-client/)  * [Golang Module](https://github.com/arduino/iot-client-go)
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Devicev2Otabinaryurl model module.
 * @module model/Devicev2Otabinaryurl
 * @version 1.4.1
 */
class Devicev2Otabinaryurl {
    /**
     * Constructs a new <code>Devicev2Otabinaryurl</code>.
     * @alias module:model/Devicev2Otabinaryurl
     * @param binaryKey {String} The object key of the binary
     */
    constructor(binaryKey) { 
        
        Devicev2Otabinaryurl.initialize(this, binaryKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, binaryKey) { 
        obj['binary_key'] = binaryKey;
    }

    /**
     * Constructs a <code>Devicev2Otabinaryurl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Devicev2Otabinaryurl} obj Optional instance to populate.
     * @return {module:model/Devicev2Otabinaryurl} The populated <code>Devicev2Otabinaryurl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Devicev2Otabinaryurl();

            if (data.hasOwnProperty('async')) {
                obj['async'] = ApiClient.convertToType(data['async'], 'Boolean');
            }
            if (data.hasOwnProperty('binary_key')) {
                obj['binary_key'] = ApiClient.convertToType(data['binary_key'], 'String');
            }
            if (data.hasOwnProperty('expire_in_mins')) {
                obj['expire_in_mins'] = ApiClient.convertToType(data['expire_in_mins'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * If false, wait for the full OTA process, until it gets a result from the device
 * @member {Boolean} async
 * @default true
 */
Devicev2Otabinaryurl.prototype['async'] = true;

/**
 * The object key of the binary
 * @member {String} binary_key
 */
Devicev2Otabinaryurl.prototype['binary_key'] = undefined;

/**
 * Binary expire time in minutes, default 10 mins
 * @member {Number} expire_in_mins
 * @default 10
 */
Devicev2Otabinaryurl.prototype['expire_in_mins'] = 10;






export default Devicev2Otabinaryurl;

