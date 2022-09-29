module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env(process.env.AWS_ACCESS_KEY_ID),
          secretAccessKey: env(process.env.AWS_ACCESS_SECRET),
          region: env(process.env.AWS_REGION),
          params: {
            Bucket: env(process.env.AWS_BUCKET),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // ...
  });

