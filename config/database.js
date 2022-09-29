module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', DATABASE_HOST),
      port: env.int('DATABASE_PORT', DATABASE_PORT),
      database: env('DATABASE_NAME', DATABASE_NAME),
      user: env('DATABASE_USERNAME', DATABASE_USERNAME),
      password: env('DATABASE_PASSWORD', DATABASE_PASSWORD),
      ssl: env.bool('DATABASE_SSL', DATABASE_SSL),
    },
  },
});


// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'odislivefaqadmin'),
//       user: env('DATABASE_USERNAME', 'root'),
//       password: env('DATABASE_PASSWORD', ''),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', 'private-db-mysql-odislive-faq-admin-do-user-12542501-0.b.db.ondigitalocean.com'),
//       port: env.int('DATABASE_PORT', 25060),
//       database: env('DATABASE_NAME', 'defaultdb'),
//       user: env('DATABASE_USERNAME', 'doadmin'),
//       password: env('DATABASE_PASSWORD', 'AVNS_bfezbFnj03ZorIyjz8O'),
//       ssl: env.bool('DATABASE_SSL', 'REQUIRED'),
//     },
//   },
// });

