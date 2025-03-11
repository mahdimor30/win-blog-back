'use strict';

/**
 * comments-api service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comments-api.comments-api');
