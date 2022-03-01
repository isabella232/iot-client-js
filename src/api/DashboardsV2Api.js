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
import ArduinoDashboardshare from '../model/ArduinoDashboardshare';
import ArduinoDashboardv2 from '../model/ArduinoDashboardv2';
import ArduinoVariableslinks from '../model/ArduinoVariableslinks';
import Dashboardshare from '../model/Dashboardshare';
import Dashboardv2 from '../model/Dashboardv2';
import Error from '../model/Error';
import Sharerequest from '../model/Sharerequest';
import Widgetlink from '../model/Widgetlink';

/**
* DashboardsV2 service.
* @module api/DashboardsV2Api
* @version 1.4.1
*/
export default class DashboardsV2Api {

    /**
    * Constructs a new DashboardsV2Api. 
    * @alias module:api/DashboardsV2Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * create dashboards_v2
     * Create a new dashboard
     * @param {module:model/Dashboardv2} dashboardv2 DashboardV2Payload describes a dashboard
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoDashboardv2} and HTTP response
     */
    dashboardsV2CreateWithHttpInfo(dashboardv2) {
      let postBody = dashboardv2;
      // verify the required parameter 'dashboardv2' is set
      if (dashboardv2 === undefined || dashboardv2 === null) {
        throw new Error("Missing the required parameter 'dashboardv2' when calling dashboardsV2Create");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ArduinoDashboardv2;
      return this.apiClient.callApi(
        '/v2/dashboards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * create dashboards_v2
     * Create a new dashboard
     * @param {module:model/Dashboardv2} dashboardv2 DashboardV2Payload describes a dashboard
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoDashboardv2}
     */
    dashboardsV2Create(dashboardv2) {
      return this.dashboardsV2CreateWithHttpInfo(dashboardv2)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * delete dashboards_v2
     * Delete a dashboard
     * @param {String} id The id of the dashboard
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    dashboardsV2DeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dashboardsV2Delete");
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

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/dashboards/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * delete dashboards_v2
     * Delete a dashboard
     * @param {String} id The id of the dashboard
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    dashboardsV2Delete(id) {
      return this.dashboardsV2DeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * deleteShare dashboards_v2
     * Delete a user the dashboard has been shared with
     * @param {String} id The id of the dashboard
     * @param {String} userId The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    dashboardsV2DeleteShareWithHttpInfo(id, userId) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dashboardsV2DeleteShare");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling dashboardsV2DeleteShare");
      }

      let pathParams = {
        'id': id,
        'user_id': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/dashboards/{id}/shares/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * deleteShare dashboards_v2
     * Delete a user the dashboard has been shared with
     * @param {String} id The id of the dashboard
     * @param {String} userId The id of the user
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    dashboardsV2DeleteShare(id, userId) {
      return this.dashboardsV2DeleteShareWithHttpInfo(id, userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * link dashboards_v2
     * Link or detach widget variables
     * @param {String} id The id of the dashboard
     * @param {String} widgetId The id of the widget
     * @param {module:model/Widgetlink} widgetlink 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoVariableslinks} and HTTP response
     */
    dashboardsV2LinkWithHttpInfo(id, widgetId, widgetlink) {
      let postBody = widgetlink;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dashboardsV2Link");
      }
      // verify the required parameter 'widgetId' is set
      if (widgetId === undefined || widgetId === null) {
        throw new Error("Missing the required parameter 'widgetId' when calling dashboardsV2Link");
      }
      // verify the required parameter 'widgetlink' is set
      if (widgetlink === undefined || widgetlink === null) {
        throw new Error("Missing the required parameter 'widgetlink' when calling dashboardsV2Link");
      }

      let pathParams = {
        'id': id,
        'widgetId': widgetId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ArduinoVariableslinks;
      return this.apiClient.callApi(
        '/v2/dashboards/{id}/widgets/{widgetId}/variables', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * link dashboards_v2
     * Link or detach widget variables
     * @param {String} id The id of the dashboard
     * @param {String} widgetId The id of the widget
     * @param {module:model/Widgetlink} widgetlink 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoVariableslinks}
     */
    dashboardsV2Link(id, widgetId, widgetlink) {
      return this.dashboardsV2LinkWithHttpInfo(id, widgetId, widgetlink)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * list dashboards_v2
     * Returns the list of dashboards
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The name of the dashboard
     * @param {String} opts.userId The user_id of the dashboard's owner
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ArduinoDashboardv2>} and HTTP response
     */
    dashboardsV2ListWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'user_id': opts['userId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ArduinoDashboardv2];
      return this.apiClient.callApi(
        '/v2/dashboards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * list dashboards_v2
     * Returns the list of dashboards
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The name of the dashboard
     * @param {String} opts.userId The user_id of the dashboard's owner
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ArduinoDashboardv2>}
     */
    dashboardsV2List(opts) {
      return this.dashboardsV2ListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * listShares dashboards_v2
     * List of users the dashboard has been shared with
     * @param {String} id The id of the dashboard
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ArduinoDashboardshare>} and HTTP response
     */
    dashboardsV2ListSharesWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dashboardsV2ListShares");
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

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ArduinoDashboardshare];
      return this.apiClient.callApi(
        '/v2/dashboards/{id}/shares', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * listShares dashboards_v2
     * List of users the dashboard has been shared with
     * @param {String} id The id of the dashboard
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ArduinoDashboardshare>}
     */
    dashboardsV2ListShares(id) {
      return this.dashboardsV2ListSharesWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * requestAccess dashboards_v2
     * Request access to a dashboard
     * @param {String} id The id of the dashboard
     * @param {module:model/Sharerequest} sharerequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    dashboardsV2RequestAccessWithHttpInfo(id, sharerequest) {
      let postBody = sharerequest;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dashboardsV2RequestAccess");
      }
      // verify the required parameter 'sharerequest' is set
      if (sharerequest === undefined || sharerequest === null) {
        throw new Error("Missing the required parameter 'sharerequest' when calling dashboardsV2RequestAccess");
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

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/dashboards/{id}/share_request', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * requestAccess dashboards_v2
     * Request access to a dashboard
     * @param {String} id The id of the dashboard
     * @param {module:model/Sharerequest} sharerequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    dashboardsV2RequestAccess(id, sharerequest) {
      return this.dashboardsV2RequestAccessWithHttpInfo(id, sharerequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * share dashboards_v2
     * Share a dashboard
     * @param {String} id The id of the dashboard
     * @param {module:model/Dashboardshare} dashboardshare 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    dashboardsV2ShareWithHttpInfo(id, dashboardshare) {
      let postBody = dashboardshare;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dashboardsV2Share");
      }
      // verify the required parameter 'dashboardshare' is set
      if (dashboardshare === undefined || dashboardshare === null) {
        throw new Error("Missing the required parameter 'dashboardshare' when calling dashboardsV2Share");
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

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v2/dashboards/{id}/shares', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * share dashboards_v2
     * Share a dashboard
     * @param {String} id The id of the dashboard
     * @param {module:model/Dashboardshare} dashboardshare 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    dashboardsV2Share(id, dashboardshare) {
      return this.dashboardsV2ShareWithHttpInfo(id, dashboardshare)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * show dashboards_v2
     * Show a dashboard
     * @param {String} id The id of the dashboard
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoDashboardv2} and HTTP response
     */
    dashboardsV2ShowWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dashboardsV2Show");
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

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ArduinoDashboardv2;
      return this.apiClient.callApi(
        '/v2/dashboards/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * show dashboards_v2
     * Show a dashboard
     * @param {String} id The id of the dashboard
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoDashboardv2}
     */
    dashboardsV2Show(id) {
      return this.dashboardsV2ShowWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * update dashboards_v2
     * Updates an existing dashboard
     * @param {String} id The id of the dashboard
     * @param {module:model/Dashboardv2} dashboardv2 DashboardV2Payload describes a dashboard
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ArduinoDashboardv2} and HTTP response
     */
    dashboardsV2UpdateWithHttpInfo(id, dashboardv2) {
      let postBody = dashboardv2;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dashboardsV2Update");
      }
      // verify the required parameter 'dashboardv2' is set
      if (dashboardv2 === undefined || dashboardv2 === null) {
        throw new Error("Missing the required parameter 'dashboardv2' when calling dashboardsV2Update");
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

      let authNames = [];
      let contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = ArduinoDashboardv2;
      return this.apiClient.callApi(
        '/v2/dashboards/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * update dashboards_v2
     * Updates an existing dashboard
     * @param {String} id The id of the dashboard
     * @param {module:model/Dashboardv2} dashboardv2 DashboardV2Payload describes a dashboard
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ArduinoDashboardv2}
     */
    dashboardsV2Update(id, dashboardv2) {
      return this.dashboardsV2UpdateWithHttpInfo(id, dashboardv2)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
