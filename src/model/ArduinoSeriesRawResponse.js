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
import BatchQueryRawResponseSeriesMediaV1 from './BatchQueryRawResponseSeriesMediaV1';

/**
 * The ArduinoSeriesRawResponse model module.
 * @module model/ArduinoSeriesRawResponse
 * @version 1.2.0
 */
class ArduinoSeriesRawResponse {
    /**
     * Constructs a new <code>ArduinoSeriesRawResponse</code>.
     * ArduinoSeriesRawResponse media type (default view)
     * @alias module:model/ArduinoSeriesRawResponse
     * @param countValues {Number} Total number of values in the array 'values'
     * @param fromDate {Date} From date
     * @param query {String} Query of for the data
     * @param respVersion {Number} Response version
     * @param series {module:model/BatchQueryRawResponseSeriesMediaV1} 
     * @param sort {module:model/ArduinoSeriesRawResponse.SortEnum} Sorting
     * @param status {String} Status of the response
     * @param times {Array.<Date>} Timestamp in RFC3339
     * @param toDate {Date} To date
     * @param values {Array.<Object>} Values can be in Float, String, Bool, Object
     */
    constructor(countValues, fromDate, query, respVersion, series, sort, status, times, toDate, values) { 
        
        ArduinoSeriesRawResponse.initialize(this, countValues, fromDate, query, respVersion, series, sort, status, times, toDate, values);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, countValues, fromDate, query, respVersion, series, sort, status, times, toDate, values) { 
        obj['count_values'] = countValues;
        obj['from_date'] = fromDate;
        obj['query'] = query;
        obj['resp_version'] = respVersion;
        obj['series'] = series;
        obj['sort'] = sort;
        obj['status'] = status;
        obj['times'] = times;
        obj['to_date'] = toDate;
        obj['values'] = values;
    }

    /**
     * Constructs a <code>ArduinoSeriesRawResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArduinoSeriesRawResponse} obj Optional instance to populate.
     * @return {module:model/ArduinoSeriesRawResponse} The populated <code>ArduinoSeriesRawResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArduinoSeriesRawResponse();

            if (data.hasOwnProperty('count_values')) {
                obj['count_values'] = ApiClient.convertToType(data['count_values'], 'Number');
            }
            if (data.hasOwnProperty('from_date')) {
                obj['from_date'] = ApiClient.convertToType(data['from_date'], 'Date');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('resp_version')) {
                obj['resp_version'] = ApiClient.convertToType(data['resp_version'], 'Number');
            }
            if (data.hasOwnProperty('series')) {
                obj['series'] = BatchQueryRawResponseSeriesMediaV1.constructFromObject(data['series']);
            }
            if (data.hasOwnProperty('series_limit')) {
                obj['series_limit'] = ApiClient.convertToType(data['series_limit'], 'Number');
            }
            if (data.hasOwnProperty('sort')) {
                obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('times')) {
                obj['times'] = ApiClient.convertToType(data['times'], ['Date']);
            }
            if (data.hasOwnProperty('to_date')) {
                obj['to_date'] = ApiClient.convertToType(data['to_date'], 'Date');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * Total number of values in the array 'values'
 * @member {Number} count_values
 */
ArduinoSeriesRawResponse.prototype['count_values'] = undefined;

/**
 * From date
 * @member {Date} from_date
 */
ArduinoSeriesRawResponse.prototype['from_date'] = undefined;

/**
 * If the response is different than 'ok'
 * @member {String} message
 * @default ''
 */
ArduinoSeriesRawResponse.prototype['message'] = '';

/**
 * Query of for the data
 * @member {String} query
 */
ArduinoSeriesRawResponse.prototype['query'] = undefined;

/**
 * Response version
 * @member {Number} resp_version
 */
ArduinoSeriesRawResponse.prototype['resp_version'] = undefined;

/**
 * @member {module:model/BatchQueryRawResponseSeriesMediaV1} series
 */
ArduinoSeriesRawResponse.prototype['series'] = undefined;

/**
 * Max of values
 * @member {Number} series_limit
 */
ArduinoSeriesRawResponse.prototype['series_limit'] = undefined;

/**
 * Sorting
 * @member {module:model/ArduinoSeriesRawResponse.SortEnum} sort
 */
ArduinoSeriesRawResponse.prototype['sort'] = undefined;

/**
 * Status of the response
 * @member {String} status
 */
ArduinoSeriesRawResponse.prototype['status'] = undefined;

/**
 * Timestamp in RFC3339
 * @member {Array.<Date>} times
 */
ArduinoSeriesRawResponse.prototype['times'] = undefined;

/**
 * To date
 * @member {Date} to_date
 */
ArduinoSeriesRawResponse.prototype['to_date'] = undefined;

/**
 * Values can be in Float, String, Bool, Object
 * @member {Array.<Object>} values
 */
ArduinoSeriesRawResponse.prototype['values'] = undefined;





/**
 * Allowed values for the <code>sort</code> property.
 * @enum {String}
 * @readonly
 */
ArduinoSeriesRawResponse['SortEnum'] = {

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



export default ArduinoSeriesRawResponse;

