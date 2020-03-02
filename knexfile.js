// module.exports = {

//   development: {
//     client: 'sqlite3',
//     useNullAsDefault: true,
//     connection: {
//       filename: './data/auth.db3'
//     },
//     migrations: {
//       directory: './data/migrations',
//       tableName: 'dbmigrations'
//     },
//     seeds:{
//       directory: './data/seeds'
//     },
//     pool:{
//       afterCreate: (conn, done)=>{
//         conn.run('PRAGMA foreign_keys = ON',done)
//       }
//     },

//     production: {
//       client: "pg",
//       connection: process.env.DATABASE_URL,
      
//       migrations: {
//         directory: "./data/migrations",
//         tableName: "dbmigrations",
//       }
//     }
//   },
//   testing:{
//     client: 'sqlite3',
//     useNullAsDefault: true,
//     connection: {
//       filename: './data/test.db3'
//     },
//     migrations: {
//       directory: './data/migrations'
//     },
//     seeds:{
//       directory: './data/seeds'
//     },
//     pool:{
//       afterCreate: (conn, done)=>{
//         conn.run('PRAGMA foreign_keys = ON',done)
//       }
//     }
//   }
// };

// Update with your config settings.
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/auth.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done); // turn on foreign key 
      }
    }
  },
    testing: {
      client: 'sqlite3',
      connection: { filename: './database/test.db3' },
      useNullAsDefault: true,
      migrations: {
        directory: './database/migrations',
      },
      seeds: { directory: './database/seeds' },
    },
    staging: {
      client: 'sqlite3',
      connection: {
        filename: './data/staging.db3',
      },
      useNullAsDefault: true,
      migrations: {
        directory: './data/migrations',
      },
      seeds: {
        directory: './data/seeds',
      },
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      },
    },
    // production: {
    //   client: 'sqlite3',
    //   connection: {
    //     filename: './data/production.db3',
    //   },
    //   useNullAsDefault: true,
    //   migrations: {
    //     directory: './data/migrations',
    //   },
    //   seeds: {
    //     directory: './data/seeds',
    //   },
    // },
    
    
  }