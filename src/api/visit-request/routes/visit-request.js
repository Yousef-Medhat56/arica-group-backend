'use strict';

/**
 * visit-request router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::visit-request.visit-request');
