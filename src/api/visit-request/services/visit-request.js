'use strict';

/**
 * visit-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::visit-request.visit-request');
