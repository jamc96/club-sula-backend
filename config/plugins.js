module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CDN_NAME"),
        api_key: env("CDN_KEY"),
        api_secret: env("CDN_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  seo: {
    enabled: true,
  },
});