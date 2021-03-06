'use strict';

const Env = use('Env');
const Youch = use('youch');
const Http = exports = module.exports = {};
const { JsonApiRequest, JsonApiError, ValidationError } = require('adonis-jsonapi/src/JsonApiRequest');

/**
 * handle errors occured during a Http request.
 *
 * @param  {Object} error
 * @param  {Object} request
 * @param  {Object} response
 */
Http.handleError = function* (error, request, response) {
  const status = error.status || 500;

  /**
   * DEVELOPMENT REPORTER
   */
  // if (Env.get('NODE_ENV') === 'development' && !(error instanceof JsonApiError)) {
  //   const youch = new Youch(error, request.request);
  //   const type = request.accepts('json', 'html');
  //   const formatMethod = type === 'json' ? 'toJSON' : 'toHTML';
  //   const formattedErrors = yield youch[formatMethod]();
  //   response.status(status).send(formattedErrors);
  //
  //   return;
  // }

  yield response.jsonApiError(error);
};

/**
 * listener for Http.start event, emitted after
 * starting http server.
 */
Http.onStart = function () {
};
