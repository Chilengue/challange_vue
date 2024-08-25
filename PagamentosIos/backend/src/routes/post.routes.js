const express =require ('express')
const routes=express.Router();

const {add} =require('../controller/post')

routes.get('/', (req, res) => {
    res.json(
        {
            info: 'sucesso'
        }
    )
})
routes.post('/', add)

routes.patch('/', () => { })

routes.put('/', () => { })

module.exports = routes;