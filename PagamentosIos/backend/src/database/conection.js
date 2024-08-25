const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('autobot_db', 'root', 'password', {
  dialect: MySqlDialect,
  database: 'chatboot',
  user: 'root',
  password: '123456',
  host: 'localhost',
  port: 3306,
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
};

module.exports = { sequelize, connectDB };
