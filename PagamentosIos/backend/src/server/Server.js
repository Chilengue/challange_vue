const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { connectDB, sequelize } = require('../database/conection');
const App=require('../App');
const path = require('path');

const app = express();
app.use(express.json());

// Conectar ao banco de dados
connectDB();

// Sincronizar os modelos com o banco de dados
sequelize.sync().then(() => {
  console.log('Tabelas sincronizadas com sucesso.');
}).catch(error => {
  console.error('Erro ao sincronizar tabelas:', error);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
