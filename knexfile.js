module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/auth.db3'
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations'
    },
    seeds:{
      directory: './data/seeds'
    },
    pool:{
      afterCreate: (conn, done)=>{
        conn.run('PRAGMA foreign_keys = ON',done)
      }
    },
  },
  testing:{
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/test.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds:{
      directory: './data/seeds'
    },
    pool:{
      afterCreate: (conn, done)=>{
        conn.run('PRAGMA foreign_keys = ON',done)
      }
    }
  }
};