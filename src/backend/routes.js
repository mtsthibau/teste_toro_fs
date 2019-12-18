const { Router } = require('express')
const routes = new Router()

const AtivoController = require('./controller/AtivoController')
const ContaController = require('./controller/ContaController')

routes.post('/cadastro', ContaController.cadastro)
routes.get('/dadosConta/:id', ContaController.dadosConta)
routes.get('/ativos', AtivoController.lista)
routes.post('/aporte/:id', ContaController.aporte)
routes.post('/retirada/:id', ContaController.retirada)
routes.post('/compra/:id', ContaController.compraAtivo)
routes.get('/vende/:id', ContaController.vendeAtivo)

module.exports = routes