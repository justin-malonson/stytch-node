"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connections = void 0;
var _method_options = require("../shared/method_options");
var _shared = require("../shared");
// !!!
// WARNING: This file is autogenerated
// Only modify code within MANUAL() sections
// or your changes may be overwritten later!
// !!!

// Request type for `scim.connections.create`.

// Response type for `scim.connections.create`.

// Request type for `scim.connections.delete`.

// Response type for `scim.connections.delete`.

// Request type for `scim.connections.get`.

// Response type for `scim.connections.get`.

// Request type for `scim.connections.rotateCancel`.

// Response type for `scim.connections.rotateCancel`.

// Request type for `scim.connections.rotateComplete`.

// Response type for `scim.connections.rotateComplete`.

// Request type for `scim.connections.rotateStart`.

// Response type for `scim.connections.rotateStart`.

// Request type for `scim.connections.update`.

// Response type for `scim.connections.update`.

class Connections {
  constructor(fetchConfig) {
    this.fetchConfig = fetchConfig;
  }

  /**
   * Update a SCIM Connection. /%}
   * @param data {@link B2BSCIMConnectionsUpdateRequest}
   * @param options {@link B2BSCIMConnectionsUpdateRequestOptions}
   * @returns {@link B2BSCIMConnectionsUpdateResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  update(data, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "PUT",
      url: `/v1/b2b/scim/${data.organization_id}/connections/${data.connection_id}`,
      headers,
      data: {
        display_name: data.display_name,
        identity_provider: data.identity_provider,
        scim_group_implicit_role_assignments: data.scim_group_implicit_role_assignments
      }
    });
  }

  /**
   * Deletes a SCIM Connection. /%}
   * @param data {@link B2BSCIMConnectionsDeleteRequest}
   * @param options {@link B2BSCIMConnectionsDeleteRequestOptions}
   * @returns {@link B2BSCIMConnectionsDeleteResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  delete(data, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "DELETE",
      url: `/v1/b2b/scim/${data.organization_id}/connections/${data.connection_id}`,
      headers,
      data: {}
    });
  }

  /**
   * Start a SCIM token rotation. /%}
   * @param data {@link B2BSCIMConnectionsRotateStartRequest}
   * @param options {@link B2BSCIMConnectionsRotateStartRequestOptions}
   * @returns {@link B2BSCIMConnectionsRotateStartResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  rotateStart(data, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "POST",
      url: `/v1/b2b/scim/${data.organization_id}/connections/${data.connection_id}/rotate/start`,
      headers,
      data: {}
    });
  }

  /**
   * Completes a SCIM token rotation. This will complete the current token rotation process and update the
   * active token to be the new token supplied in the
   * [start SCIM token rotation](https://stytch.com/docs/b2b/api/scim-rotate-token-start) response. /%}
   * @param data {@link B2BSCIMConnectionsRotateCompleteRequest}
   * @param options {@link B2BSCIMConnectionsRotateCompleteRequestOptions}
   * @returns {@link B2BSCIMConnectionsRotateCompleteResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  rotateComplete(data, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "POST",
      url: `/v1/b2b/scim/${data.organization_id}/connections/${data.connection_id}/rotate/complete`,
      headers,
      data: {}
    });
  }

  /**
   * Cancel a SCIM token rotation. This will cancel the current token rotation process, keeping the original
   * token active. /%}
   * @param data {@link B2BSCIMConnectionsRotateCancelRequest}
   * @param options {@link B2BSCIMConnectionsRotateCancelRequestOptions}
   * @returns {@link B2BSCIMConnectionsRotateCancelResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  rotateCancel(data, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "POST",
      url: `/v1/b2b/scim/${data.organization_id}/connections/${data.connection_id}/rotate/cancel`,
      headers,
      data: {}
    });
  }

  /**
   * Create a new SCIM Connection. /%}
   * @param data {@link B2BSCIMConnectionsCreateRequest}
   * @param options {@link B2BSCIMConnectionsCreateRequestOptions}
   * @returns {@link B2BSCIMConnectionsCreateResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  create(data, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "POST",
      url: `/v1/b2b/scim/${data.organization_id}/connections`,
      headers,
      data: {
        display_name: data.display_name,
        identity_provider: data.identity_provider
      }
    });
  }

  /**
   * Get SCIM Connections. /%}
   * @param params {@link B2BSCIMConnectionsGetRequest}
   * @param options {@link B2BSCIMConnectionsGetRequestOptions}
   * @returns {@link B2BSCIMConnectionsGetResponse}
   * @async
   * @throws A {@link StytchError} on a non-2xx response from the Stytch API
   * @throws A {@link RequestError} when the Stytch API cannot be reached
   */
  get(params, options) {
    const headers = {};
    if (options?.authorization) {
      (0, _method_options.addAuthorizationHeaders)(headers, options.authorization);
    }
    return (0, _shared.request)(this.fetchConfig, {
      method: "GET",
      url: `/v1/b2b/scim/${params.organization_id}/connections`,
      headers,
      params: {}
    });
  }
}
exports.Connections = Connections;