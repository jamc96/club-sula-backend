"use strict";

/**
 * home service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::home.home", ({ strapi }) => ({
  async find(...args) {
    return await strapi.entityService.findOne("api::home.home", 1, {
      populate: ["seo", "hero", "hero.image", "hero.buttons"],
    });
  },
}));

