'use strict';

/**
 * accessory-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::accessory-type.accessory-type');
