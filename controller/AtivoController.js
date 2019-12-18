class AtivoController {

    async lista(req, res) {

        return res.json(
            [{
                    nome: "PETR4",
                    valor: 1 + (10000 - 1) * Math.random().toFixed(2)
                },
                {
                    nome: "VALE3",
                    valor: 1 + (10000 - 1) * Math.random().toFixed(2)
                }
            ]
        )
    }
}

module.exports = new AtivoController()