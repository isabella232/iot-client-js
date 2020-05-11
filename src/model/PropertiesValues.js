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
import PropertiesValue from './PropertiesValue';

/**
 * The PropertiesValues model module.
 * @module model/PropertiesValues
 * @version 1.2.1
 */
class PropertiesValues {
    /**
     * Constructs a new <code>PropertiesValues</code>.
     * @alias module:model/PropertiesValues
     * @param properties {Array.<module:model/PropertiesValue>} 
     */
    constructor(properties) { 
        
        PropertiesValues.initialize(this, properties);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, properties) { 
        obj['properties'] = properties;
    }

    /**
     * Constructs a <code>PropertiesValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PropertiesValues} obj Optional instance to populate.
     * @return {module:model/PropertiesValues} The populated <code>PropertiesValues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PropertiesValues();

            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [PropertiesValue]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/PropertiesValue>} properties
 */
PropertiesValues.prototype['properties'] = undefined;






export default PropertiesValues;

