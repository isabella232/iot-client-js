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

/**
 * The Devicev2 model module.
 * @module model/Devicev2
 * @version 1.0.0-beta1
 */
class Devicev2 {
    /**
     * Constructs a new <code>Devicev2</code>.
     * DeviceV2 describes a device.
     * @alias module:model/Devicev2
     */
    constructor() { 
        
        Devicev2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Devicev2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Devicev2} obj Optional instance to populate.
     * @return {module:model/Devicev2} The populated <code>Devicev2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Devicev2();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('serial')) {
                obj['serial'] = ApiClient.convertToType(data['serial'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The UUID of the device
 * @member {String} id
 */
Devicev2.prototype['id'] = undefined;

/**
 * The friendly name of the device
 * @member {String} name
 */
Devicev2.prototype['name'] = undefined;

/**
 * The serial uuid of the device
 * @member {String} serial
 */
Devicev2.prototype['serial'] = undefined;

/**
 * The type of the device
 * @member {String} type
 */
Devicev2.prototype['type'] = undefined;

/**
 * The user_id associated to the device. If absent it will be inferred from the authentication header
 * @member {String} user_id
 */
Devicev2.prototype['user_id'] = undefined;






export default Devicev2;

