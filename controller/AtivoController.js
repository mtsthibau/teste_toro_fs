class AtivoController {

    async lista(req, res) {

        return res.json(
            [{ nome: "PETR4", valor: setValor() },
                { nome: "VALE3", valor: setValor() },
                { nome: "BBAS3", valor: setValor() },
                { nome: "ITUB4", valor: setValor() },
                { nome: "BBDC4", valor: setValor() },
                { nome: "JBSS3", valor: setValor() },
                { nome: "ABEV3", valor: setValor() },
                { nome: "MGLU3", valor: setValor() },
                { nome: "B3SA3", valor: setValor() },
                { nome: "RENT3", valor: setValor() },
                { nome: "ITSA4", valor: setValor() },
                { nome: 'PETR3', valor: setValor() },
                { nome: 'ELET3', valor: setValor() },
                { nome: 'BRFS3', valor: setValor() },
                { nome: 'KROT3', valor: setValor() },
                { nome: 'UGPA3', valor: setValor() },
                { nome: 'VVAR3', valor: setValor() },
                { nome: 'GOLL4', valor: setValor() },
                { nome: 'GGBR4', valor: setValor() },
                { nome: 'PCAR4', valor: setValor() },
                { nome: 'RAIL3', valor: setValor() },
                { nome: 'AZUL4', valor: setValor() },
                { nome: 'GNDI3', valor: setValor() },
                { nome: 'ELET6', valor: setValor() },
                { nome: 'MRFG3', valor: setValor() },
                { nome: 'CSNA3', valor: setValor() },
                { nome: 'LREN3', valor: setValor() },
                { nome: 'IRBR3', valor: setValor() },
                { nome: 'BRDT3', valor: setValor() },
                { nome: 'CCRO3', valor: setValor() },
                { nome: 'SUZB3', valor: setValor() },
                { nome: 'RADL3', valor: setValor() },
                { nome: 'GOAU4', valor: setValor() },
                { nome: 'BBSE3', valor: setValor() },
                { nome: 'CIEL3', valor: setValor() },
                { nome: 'CVCB3', valor: setValor() },
                { nome: 'NATU3', valor: setValor() },
                { nome: 'BTOW3', valor: setValor() },
                { nome: 'CMIG4', valor: setValor() },
                { nome: 'SBSP3', valor: setValor() }
            ]
        )
    }

    setValor() {
        return 1 + (10 - 1) * Math.random().toFixed(2)
    }
}

module.exports = new AtivoController()