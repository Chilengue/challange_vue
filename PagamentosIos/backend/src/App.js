const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const post=require('./routes/post.routes')
const Comment=require('./routes/Comment.routes')
const autoboService=require('./routes/autoboService.routes');
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
        this.app.use(bodyparser());
    }
    routes() {
        this.app.use('/post', post)
        this.app.use('/Comment', Comment)
        this.app.use('/autoboService', autoboService)
    }

}
module.exports = new App();
