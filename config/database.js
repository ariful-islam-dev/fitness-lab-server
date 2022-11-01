const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
 
});


// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST'),
//       port: env.int('DATABASE_PORT'),
//       database: env('DATABASE_NAME'),
//       user: env('DATABASE_USERNAME'),
//       password: env('DATABASE_PASSWORD'),
      
//       ssl: {
//         rejectUnauthorized: false, // For self-signed certificates
//       },
//     },
//     debug: false,
//   },
// });