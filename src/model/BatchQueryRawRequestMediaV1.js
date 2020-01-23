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
 * The BatchQueryRawRequestMediaV1 model module.
 * @module model/BatchQueryRawRequestMediaV1
 * @version 1.2.0
 */
class BatchQueryRawRequestMediaV1 {
    /**
     * Constructs a new <code>BatchQueryRawRequestMediaV1</code>.
     * @alias module:model/BatchQueryRawRequestMediaV1
     * @param q {String} Query
     */
    constructor(q) { 
        
        BatchQueryRawRequestMediaV1.initialize(this, q);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, q) { 
        obj['q'] = q;
    }

    /**
     * Constructs a <code>BatchQueryRawRequestMediaV1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchQueryRawRequestMediaV1} obj Optional instance to populate.
     * @return {module:model/BatchQueryRawRequestMediaV1} The populated <code>BatchQueryRawRequestMediaV1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchQueryRawRequestMediaV1();

            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'Date');
            }
            if (data.hasOwnProperty('q')) {
                obj['q'] = ApiClient.convertToType(data['q'], 'String');
            }
            if (data.hasOwnProperty('series_limit')) {
                obj['series_limit'] = ApiClient.convertToType(data['series_limit'], 'Number');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * From timestamp
 * @member {Date} from
 */
BatchQueryRawRequestMediaV1.prototype['from'] = undefined;

/**
 * Query
 * @member {String} q
 */
BatchQueryRawRequestMediaV1.prototype['q'] = undefined;

/**
 * Max of values
 * @member {Number} series_limit
 */
BatchQueryRawRequestMediaV1.prototype['series_limit'] = undefined;

/**
 * Sorting
 * @member {module:model/BatchQueryRawRequestMediaV1.SortEnum} sort
 * @default 'DESC'
 */
BatchQueryRawRequestMediaV1.prototype['sort'] = 'DESC';

/**
 * To timestamp
 * @member {Date} to
 */
BatchQueryRawRequestMediaV1.prototype['to'] = undefined;





/**
 * Allowed values for the <code>sort</code> property.
 * @enum {String}
 * @readonly
 */
BatchQueryRawRequestMediaV1['SortEnum'] = {

    /**
     * value: "ASC"
     * @const
     */
    "ASC": "ASC",

    /**
     * value: "DESC"
     * @const
     */
    "DESC": "DESC"
};



export default BatchQueryRawRequestMediaV1;

