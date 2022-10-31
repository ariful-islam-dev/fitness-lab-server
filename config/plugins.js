

    module.exports = ({ env }) => ({
      // ...
      upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_KEY,
            api_secret: process.env.CLOUDINARY_SECRET
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },
      },
      graphql: {
        config: {
          endpoint: '/graphql',
          shadowCRUD: true,
          playgroundAlways: true,
          depthLimit: 10,
          amountLimit: 100,
          apolloServer: {
            tracing: false,
            introspection: true,
          },
        },
      },
    });