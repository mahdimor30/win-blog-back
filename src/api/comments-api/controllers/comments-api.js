'use strict';

/**
 * comments-api controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comments-api.comments-api');
