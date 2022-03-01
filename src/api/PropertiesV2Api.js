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


import ApiClient from "../ApiClient";
import ArduinoProperty from '../model/ArduinoProperty';
import ArduinoTimeseriesmedia from '../model/ArduinoTimeseriesmedia';
import Error from '../model/Error';
import Property from '../model/Property';
import PropertyValue from '../model/PropertyValue';

/**
* PropertiesV2 service.
* @module api/PropertiesV2Api
* @version 1.4.1
*/
export default class PropertiesV2Api {

    /**
    * Constructs a new PropertiesV2Api. 
    * @alias module:api/PropertiesV2Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * create properties_v2
     * Creates a new property associated to a thing
     * @param {String} id The id of the thing
     * @param {module:model/Property} property PropertyPayload describes a property of a thing. No field is mandatory
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoProperty} and HTTP response
     */
    propertiesV2CreateWithHttpInfo(id, property) {
      let postBody = property;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling propertiesV2Create");
      }
      // verify the required parameter 'property' is set
      if (property === undefined || property === null) {
        throw new Error("Missing the required parameter 'property' when calling propertiesV2Create");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ArduinoProperty;
      return this.apiClient.callApi(
        '/v2/things/{id}/properties', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create properties_v2
     * Creates a new property associated to a thing
     * @param {String} id The id of the thing
     * @param {module:model/Property} property PropertyPayload describes a property of a thing. No field is mandatory
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoProperty}
     */
    propertiesV2Create(id, property) {
      return this.propertiesV2CreateWithHttpInfo(id, property)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete properties_v2
     * Removes a property associated to a thing
     * @param {String} id The id of the thing
     * @param {String} pid The id of the property
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force If true, hard delete the property (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    propertiesV2DeleteWithHttpInfo(id, pid, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling propertiesV2Delete");
      }
      // verify the required parameter 'pid' is set
      if (pid === undefined || pid === null) {
        throw new Error("Missing the required parameter 'pid' when calling propertiesV2Delete");
      }

      let pathParams = {
        'id': id,
        'pid': pid
      };
      let queryParams = {
        'force': opts['force']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/things/{id}/properties/{pid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete properties_v2
     * Removes a property associated to a thing
     * @param {String} id The id of the thing
     * @param {String} pid The id of the property
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force If true, hard delete the property (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    propertiesV2Delete(id, pid, opts) {
      return this.propertiesV2DeleteWithHttpInfo(id, pid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * list properties_v2
     * Returns the list of properties associated to the thing
     * @param {String} id The id of the thing
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showDeleted If true, shows the soft deleted properties (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ArduinoProperty>} and HTTP response
     */
    propertiesV2ListWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling propertiesV2List");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'show_deleted': opts['showDeleted']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ArduinoProperty];
      return this.apiClient.callApi(
        '/v2/things/{id}/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list properties_v2
     * Returns the list of properties associated to the thing
     * @param {String} id The id of the thing
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showDeleted If true, shows the soft deleted properties (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ArduinoProperty>}
     */
    propertiesV2List(id, opts) {
      return this.propertiesV2ListWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * publish properties_v2
     * Publish a property value to MQTT
     * @param {String} id The id of the thing
     * @param {String} pid The id of the property
     * @param {module:model/PropertyValue} propertyValue PropertyValuePayload describes a property value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    propertiesV2PublishWithHttpInfo(id, pid, propertyValue) {
      let postBody = propertyValue;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling propertiesV2Publish");
      }
      // verify the required parameter 'pid' is set
      if (pid === undefined || pid === null) {
        throw new Error("Missing the required parameter 'pid' when calling propertiesV2Publish");
      }
      // verify the required parameter 'propertyValue' is set
      if (propertyValue === undefined || propertyValue === null) {
        throw new Error("Missing the required parameter 'propertyValue' when calling propertiesV2Publish");
      }

      let pathParams = {
        'id': id,
        'pid': pid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/things/{id}/properties/{pid}/publish', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * publish properties_v2
     * Publish a property value to MQTT
     * @param {String} id The id of the thing
     * @param {String} pid The id of the property
     * @param {module:model/PropertyValue} propertyValue PropertyValuePayload describes a property value
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    propertiesV2Publish(id, pid, propertyValue) {
      return this.propertiesV2PublishWithHttpInfo(id, pid, propertyValue)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * show properties_v2
     * Returns the property requested by the user
     * @param {String} id The id of the thing
     * @param {String} pid The id of the property
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showDeleted If true, shows the soft deleted properties (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoProperty} and HTTP response
     */
    propertiesV2ShowWithHttpInfo(id, pid, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling propertiesV2Show");
      }
      // verify the required parameter 'pid' is set
      if (pid === undefined || pid === null) {
        throw new Error("Missing the required parameter 'pid' when calling propertiesV2Show");
      }

      let pathParams = {
        'id': id,
        'pid': pid
      };
      let queryParams = {
        'show_deleted': opts['showDeleted']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ArduinoProperty;
      return this.apiClient.callApi(
        '/v2/things/{id}/properties/{pid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * show properties_v2
     * Returns the property requested by the user
     * @param {String} id The id of the thing
     * @param {String} pid The id of the property
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showDeleted If true, shows the soft deleted properties (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoProperty}
     */
    propertiesV2Show(id, pid, opts) {
      return this.propertiesV2ShowWithHttpInfo(id, pid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * timeseries properties_v2
     * Get numerical property's historic data binned on a specified time interval (note: the total number of data points should NOT be greater than 1000 otherwise the result will be truncated)
     * @param {String} id The id of the thing
     * @param {String} pid ID of a numerical property
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.desc Whether data's ordering (by time) should be descending (default to false)
     * @param {String} opts.from Get data with a timestamp >= to this date (default: 2 weeks ago, min: 1842-01-01T00:00:00Z, max: 2242-01-01T00:00:00Z)
     * @param {Number} opts.interval Binning interval in seconds (defaut: the smallest possible value compatibly with the limit of 1000 data points in the response)
     * @param {String} opts.to Get data with a timestamp < to this date (default: now, min: 1842-01-01T00:00:00Z, max: 2242-01-01T00:00:00Z)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoTimeseriesmedia} and HTTP response
     */
    propertiesV2TimeseriesWithHttpInfo(id, pid, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling propertiesV2Timeseries");
      }
      // verify the required parameter 'pid' is set
      if (pid === undefined || pid === null) {
        throw new Error("Missing the required parameter 'pid' when calling propertiesV2Timeseries");
      }

      let pathParams = {
        'id': id,
        'pid': pid
      };
      let queryParams = {
        'desc': opts['desc'],
        'from': opts['from'],
        'interval': opts['interval'],
        'to': opts['to']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ArduinoTimeseriesmedia;
      return this.apiClient.callApi(
        '/v2/things/{id}/properties/{pid}/timeseries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * timeseries properties_v2
     * Get numerical property's historic data binned on a specified time interval (note: the total number of data points should NOT be greater than 1000 otherwise the result will be truncated)
     * @param {String} id The id of the thing
     * @param {String} pid ID of a numerical property
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.desc Whether data's ordering (by time) should be descending (default to false)
     * @param {String} opts.from Get data with a timestamp >= to this date (default: 2 weeks ago, min: 1842-01-01T00:00:00Z, max: 2242-01-01T00:00:00Z)
     * @param {Number} opts.interval Binning interval in seconds (defaut: the smallest possible value compatibly with the limit of 1000 data points in the response)
     * @param {String} opts.to Get data with a timestamp < to this date (default: now, min: 1842-01-01T00:00:00Z, max: 2242-01-01T00:00:00Z)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoTimeseriesmedia}
     */
    propertiesV2Timeseries(id, pid, opts) {
      return this.propertiesV2TimeseriesWithHttpInfo(id, pid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * update properties_v2
     * Updates a property associated to a thing
     * @param {String} id The id of the thing
     * @param {String} pid The id of the property
     * @param {module:model/Property} property PropertyPayload describes a property of a thing. No field is mandatory
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoProperty} and HTTP response
     */
    propertiesV2UpdateWithHttpInfo(id, pid, property) {
      let postBody = property;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling propertiesV2Update");
      }
      // verify the required parameter 'pid' is set
      if (pid === undefined || pid === null) {
        throw new Error("Missing the required parameter 'pid' when calling propertiesV2Update");
      }
      // verify the required parameter 'property' is set
      if (property === undefined || property === null) {
        throw new Error("Missing the required parameter 'property' when calling propertiesV2Update");
      }

      let pathParams = {
        'id': id,
        'pid': pid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oauth2'];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ArduinoProperty;
      return this.apiClient.callApi(
        '/v2/things/{id}/properties/{pid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * update properties_v2
     * Updates a property associated to a thing
     * @param {String} id The id of the thing
     * @param {String} pid The id of the property
     * @param {module:model/Property} property PropertyPayload describes a property of a thing. No field is mandatory
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoProperty}
     */
    propertiesV2Update(id, pid, property) {
      return this.propertiesV2UpdateWithHttpInfo(id, pid, property)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
