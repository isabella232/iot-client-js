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
import ArduinoSeriesRawResponse from './ArduinoSeriesRawResponse';

/**
 * The ArduinoSeriesRawBatch model module.
 * @module model/ArduinoSeriesRawBatch
 * @version 1.2.1
 */
class ArduinoSeriesRawBatch {
    /**
     * Constructs a new <code>ArduinoSeriesRawBatch</code>.
     * ArduinoSeriesRawBatch media type (default view)
     * @alias module:model/ArduinoSeriesRawBatch
     * @param respVersion {Number} Response version
     * @param responses {Array.<module:model/ArduinoSeriesRawResponse>} Responses of the request
     */
    constructor(respVersion, responses) { 
        
        ArduinoSeriesRawBatch.initialize(this, respVersion, responses);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, respVersion, responses) { 
        obj['resp_version'] = respVersion;
        obj['responses'] = responses;
    }

    /**
     * Constructs a <code>ArduinoSeriesRawBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoSeriesRawBatch} obj Optional instance to populate.
     * @return {module:model/ArduinoSeriesRawBatch} The populated <code>ArduinoSeriesRawBatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoSeriesRawBatch();

            if (data.hasOwnProperty('resp_version')) {
                obj['resp_version'] = ApiClient.convertToType(data['resp_version'], 'Number');
            }
            if (data.hasOwnProperty('responses')) {
                obj['responses'] = ApiClient.convertToType(data['responses'], [ArduinoSeriesRawResponse]);
            }
        }
        return obj;
    }


}

/**
 * Response version
 * @member {Number} resp_version
 */
ArduinoSeriesRawBatch.prototype['resp_version'] = undefined;

/**
 * Responses of the request
 * @member {Array.<module:model/ArduinoSeriesRawResponse>} responses
 */
ArduinoSeriesRawBatch.prototype['responses'] = undefined;






export default ArduinoSeriesRawBatch;

