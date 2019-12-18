const Conta = require("../model/Conta")
const mongoose = require('mongoose')

class ContaController {

    async cadastro(req, res) {
        try {
            const conta = await Conta.create(req.body)
            return res.json(conta)
        } catch (e) {
            return res.status(400).send('JSON inválido')
        }
    }

    async dadosConta(req, res) {
        try {
            const conta = await Conta.findById(req.params.id)
            return res.json(conta)
        } catch (e) {
            return res.status(400).send('JSON inválido')
        }
    }

    async aporte(req, res) {
        try {

            if (!req.body.valor || !Number.isFinite(req.body.valor)) {
                return res.status(400).send('JSON inválido')
            }

            const conta = await Conta.findById(req.params.id)
            console.log(req.body.valor)
            conta.saldo += req.body.valor
            const contaR = await conta.updateOne(conta)

            return res.json(contaR)

        } catch (e) {
            return res.status(400).send('JSON inválido')
        }
    }

    async retirada(req, res) {
        try {

            if (!req.body.valor || !Number.isFinite(req.body.valor)) {
                return res.status(400).send('JSON inválido')
            }

            const conta = await Conta.findById(req.params.id)

            if (conta.saldo < req.body.valor) {
                return res.status(200).send('Saldo insuficiente')
            }

            conta.saldo -= req.body.valor
            const contaR = await conta.updateOne(conta)

            return res.json(contaR)

        } catch (e) {
            return res.status(400).send('JSON inválido')
        }
    }

    async compraAtivo(req, res) {
        try {

            if (!req.body.valor || !Number.isFinite(req.body.valor) || !req.body.codigo) {
                return res.status(400).send('JSON inválido')
            }

            const conta = await Conta.findById(req.params.id);

            if (conta.saldo < req.body.valor) {
                return res.status(200).send('Saldo insuficiente')
            }

            const ativo = {
                id: mongoose.Types.ObjectId(),
                codigo: req.body.codigo,
                valor: req.body.valor
            }

            conta.saldo -= req.body.valor
            conta.ativos.push(ativo)
            await conta.save()

            return res.json(conta)

        } catch (e) {
            return res.status(400).send('JSON inválido')
        }
    }

    async vendeAtivo(req, res) {
        try {

            if (!req.body.ativo) {
                return res.status(400).send('JSON inválido')
            }

            const conta = await Conta.findById(req.params.id)

            conta.ativos.forEach((element, index) => {
                if (req.body.ativo == element.id) {
                    conta.ativos.splice(index);
                    conta.saldo += element.valor
                }
            });

            await conta.save()

            return res.json(conta)

        } catch (e) {
            return res.status(400).send('JSON inválido')
        }
    }
}


module.exports = new ContaController()