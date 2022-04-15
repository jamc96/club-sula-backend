"use strict";

/**
 *  album controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::album.album", ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: ["coverImage",],
    };

    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    const sanitizedEntities = await this.sanitizeOutput(data, ctx);
    // some more custom logic

    return { data: sanitizedEntities, meta };
  },
}));
