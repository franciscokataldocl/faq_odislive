module.exports = ({ env }) => ({
    // ...
    // upload: {
    //   config: {
    //     provider: 'aws-s3',
    //     providerOptions: {
    //       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //       secretAccessKey: process.env.AWS_ACCESS_SECRET,
    //       region: process.env.AWS_REGION,
    //       params: {
    //         Bucket: process.env.AWS_BUCKET,
    //       },
    //     },
    //     actionOptions: {
    //       upload: {},
    //       uploadStream: {},
    //       delete: {},
    //     },
    //   },
    // },

    upload: {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_ACCESS_SECRET,
            region: process.env.AWS_REGION,
            params: {
                Bucket: process.env.AWS_BUCKET,
             },
            endpoint:process.env.ENDPOINT, //workings
            baseUrl: process.env.BASE_URL,
          },
        },
      },
    // ...
  });

