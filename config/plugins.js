module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-sendinblue",
      providerOptions: {
        sendinblue_api_key: env("SIB_API_KEY"),
        sendinblue_default_replyto: env("SIB_DEFAULT_REPLY_TO"),
        sendinblue_default_from: env("SIB_DEFAULT_FROM"),
        sendinblue_default_from_name: env("SIB_DEFAULT_FROM_NAME"),
      },
    },
  },
  meilisearch: {
    config: {
      // Your meili host
      host: env("MEILISEARCH_HOST"),
      // Your master key or private key
      apiKey: env("MEILISEARCH_API_KEY"),
      offer: {
        indexName: "products",
      },
      "gardens-page": {
        indexName: "products",
      },
      "swimming-pools-page": {
        indexName: "products",
      },
      "fountains-page": {
        indexName: "products",
      },
      "electricity-networks-page": {
        indexName: "products",
      },
      "irrigation-networks-page": {
        indexName: "products",
      },
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_API_KEY'),
        api_secret: env('CLOUDINARY_API_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
