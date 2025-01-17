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
import ArduinoDashboardshare from './ArduinoDashboardshare';
import ArduinoWidgetv2 from './ArduinoWidgetv2';

/**
 * The ArduinoDashboardv2 model module.
 * @module model/ArduinoDashboardv2
 * @version 1.4.1
 */
class ArduinoDashboardv2 {
    /**
     * Constructs a new <code>ArduinoDashboardv2</code>.
     * Dashboard is a collection of widgets (default view)
     * @alias module:model/ArduinoDashboardv2
     * @param id {String} The friendly name of the dashboard
     * @param name {String} The friendly name of the dashboard
     * @param updatedAt {Date} Last update date
     */
    constructor(id, name, updatedAt) { 
        
        ArduinoDashboardv2.initialize(this, id, name, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, updatedAt) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>ArduinoDashboardv2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDashboardv2} obj Optional instance to populate.
     * @return {module:model/ArduinoDashboardv2} The populated <code>ArduinoDashboardv2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDashboardv2();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shared_by')) {
                obj['shared_by'] = ArduinoDashboardshare.constructFromObject(data['shared_by']);
            }
            if (data.hasOwnProperty('shared_with')) {
                obj['shared_with'] = ApiClient.convertToType(data['shared_with'], [ArduinoDashboardshare]);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('widgets')) {
                obj['widgets'] = ApiClient.convertToType(data['widgets'], [ArduinoWidgetv2]);
            }
        }
        return obj;
    }


}

/**
 * The friendly name of the dashboard
 * @member {String} id
 */
ArduinoDashboardv2.prototype['id'] = undefined;

/**
 * The friendly name of the dashboard
 * @member {String} name
 */
ArduinoDashboardv2.prototype['name'] = undefined;

/**
 * @member {module:model/ArduinoDashboardshare} shared_by
 */
ArduinoDashboardv2.prototype['shared_by'] = undefined;

/**
 * ArduinoDashboardshareCollection is the media type for an array of ArduinoDashboardshare (default view)
 * @member {Array.<module:model/ArduinoDashboardshare>} shared_with
 */
ArduinoDashboardv2.prototype['shared_with'] = undefined;

/**
 * Last update date
 * @member {Date} updated_at
 */
ArduinoDashboardv2.prototype['updated_at'] = undefined;

/**
 * ArduinoWidgetv2Collection is the media type for an array of ArduinoWidgetv2 (default view)
 * @member {Array.<module:model/ArduinoWidgetv2>} widgets
 */
ArduinoDashboardv2.prototype['widgets'] = undefined;






export default ArduinoDashboardv2;

