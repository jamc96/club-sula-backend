"use strict";

/**
 *  global controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::global.global", ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: ["seo", "seo.metaImage", "shortcutIcon"],
    };

    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    const sanitizedEntities = await this.sanitizeOutput(data, ctx);
    // some more custom logic

    return { data: sanitizedEntities, meta };
  },
}));
