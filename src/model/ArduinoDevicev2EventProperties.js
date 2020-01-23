/**
 * Iot API
 * Collection of all public API endpoints.
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
import ArduinoDevicev2SimpleProperties from './ArduinoDevicev2SimpleProperties';

/**
 * The ArduinoDevicev2EventProperties model module.
 * @module model/ArduinoDevicev2EventProperties
 * @version 1.2.0
 */
class ArduinoDevicev2EventProperties {
    /**
     * Constructs a new <code>ArduinoDevicev2EventProperties</code>.
     * ArduinoDevicev2EventProperties media type (default view)
     * @alias module:model/ArduinoDevicev2EventProperties
     * @param events {Array.<module:model/ArduinoDevicev2SimpleProperties>} ArduinoDevicev2SimplePropertiesCollection is the media type for an array of ArduinoDevicev2SimpleProperties (default view)
     * @param id {String} The device of the property
     */
    constructor(events, id) { 
        
        ArduinoDevicev2EventProperties.initialize(this, events, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, events, id) { 
        obj['events'] = events;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>ArduinoDevicev2EventProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoDevicev2EventProperties} obj Optional instance to populate.
     * @return {module:model/ArduinoDevicev2EventProperties} The populated <code>ArduinoDevicev2EventProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoDevicev2EventProperties();

            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [ArduinoDevicev2SimpleProperties]);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ArduinoDevicev2SimplePropertiesCollection is the media type for an array of ArduinoDevicev2SimpleProperties (default view)
 * @member {Array.<module:model/ArduinoDevicev2SimpleProperties>} events
 */
ArduinoDevicev2EventProperties.prototype['events'] = undefined;

/**
 * The device of the property
 * @member {String} id
 */
ArduinoDevicev2EventProperties.prototype['id'] = undefined;






export default ArduinoDevicev2EventProperties;

