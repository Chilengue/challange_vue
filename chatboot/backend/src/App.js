const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// //config swagger 
// // const swaggerUi =require('swagger-ui-express')
// // const swaggerDocument=require('../swagger.json')
// //routes
// const paciente = require('./routes/paciente.routes');
// const agendamento = require('./routes/agendamentos.routes');
// const medico = require('./routes/medigo.routes');
//const fatura = require('./routes/fatura.routes');
//const consultas = require('./routes/consultas.routes');
// const funcinario = require('./routes/funcionario.routes')
const mongose = require('./database/conection');
const bodyparser = require('body-parser');




class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }
    routes() {
        // this.app.use('/fatura', fatura)
        // this.app.use('/funcinario'.funcinario)
    }

}
module.exports = new App();
