module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: "123456",
      database: "LetsGraduate",
    },
    migrations: {
      directory: "./db/migrations", // You can choose any directory you like
    },
  },
};
