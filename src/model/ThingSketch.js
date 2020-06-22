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
 * The ThingSketch model module.
 * @module model/ThingSketch
 * @version 1.3.3
 */
class ThingSketch {
    /**
     * Constructs a new <code>ThingSketch</code>.
     * ThingSketchPayload describes a sketch of a thing
     * @alias module:model/ThingSketch
     */
    constructor() { 
        
        ThingSketch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ThingSketch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThingSketch} obj Optional instance to populate.
     * @return {module:model/ThingSketch} The populated <code>ThingSketch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThingSketch();

            if (data.hasOwnProperty('sketch_version')) {
                obj['sketch_version'] = ApiClient.convertToType(data['sketch_version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The autogenerated sketch version
 * @member {module:model/ThingSketch.SketchVersionEnum} sketch_version
 */
ThingSketch.prototype['sketch_version'] = undefined;





/**
 * Allowed values for the <code>sketch_version</code> property.
 * @enum {String}
 * @readonly
 */
ThingSketch['SketchVersionEnum'] = {

    /**
     * value: "v1"
     * @const
     */
    "v1": "v1",

    /**
     * value: "v2"
     * @const
     */
    "v2": "v2"
};



export default ThingSketch;

