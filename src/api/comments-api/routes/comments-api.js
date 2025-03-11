'use strict';

/**
 * comments-api router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::comments-api.comments-api');
