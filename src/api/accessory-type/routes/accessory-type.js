'use strict';

/**
 * accessory-type router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::accessory-type.accessory-type');
