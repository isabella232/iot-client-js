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
 * The ArduinoDevicev2Pass model module.
 * @module model/ArduinoDevicev2Pass
 * @version 1.4.1
 */
class ArduinoDevicev2Pass {
    /**
     * Constructs a new <code>ArduinoDevicev2Pass</code>.
     * DeviceCertV2 describes a password associated to a device (default view)
     * @alias module:model/ArduinoDevicev2Pass
     * @param set {Boolean} Whether the password is set or not
     */
    constructor(set) { 
        
        ArduinoDevicev2Pass.initialize(this, set);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, set) { 
        obj['set'] = set;
    }

    /**
     * Constructs a <code>ArduinoDevicev2Pass</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDevicev2Pass} obj Optional instance to populate.
     * @return {module:model/ArduinoDevicev2Pass} The populated <code>ArduinoDevicev2Pass</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2Pass();

            if (data.hasOwnProperty('set')) {
                obj['set'] = ApiClient.convertToType(data['set'], 'Boolean');
            }
            if (data.hasOwnProperty('suggested_password')) {
                obj['suggested_password'] = ApiClient.convertToType(data['suggested_password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Whether the password is set or not
 * @member {Boolean} set
 */
ArduinoDevicev2Pass.prototype['set'] = undefined;

/**
 * A random suggested password
 * @member {String} suggested_password
 */
ArduinoDevicev2Pass.prototype['suggested_password'] = undefined;






export default ArduinoDevicev2Pass;

