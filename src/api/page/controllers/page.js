"use strict";

/**
 *  page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { getFullPopulateObject } = require("../../../utils/helpers");

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const { results, meta } = await strapi.service("api::page.page").find({
      ...getFullPopulateObject("api::page.page"),
      ...query,
    });

    const sanitizedEntities = await this.sanitizeOutput(results, ctx);

    return {
      data: sanitizedEntities,
      meta,
    };
  },
}));
