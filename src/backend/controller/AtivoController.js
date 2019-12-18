class AtivoController {

    async lista(req, res) {

        const ativos = [
            "PETR4",
            // "VALE3",
            // "BBAS3",
            // "ITUB4",
            // "BBDC4",
            // "JBSS3",
            // "ABEV3",
            // "MGLU3",
            // "B3SA3",
            // "RENT3",
            // "ITSA4",
            // 'PETR3',
            // 'ELET3',
            // 'BRFS3',
            // 'KROT3',
            // 'UGPA3',
            // 'VVAR3',
            // 'GOLL4',
            // 'GGBR4',
            // 'PCAR4',
            // 'RAIL3',
            // 'AZUL4',
            // 'GNDI3',
            // 'ELET6',
            // 'MRFG3',
            // 'CSNA3',
            // 'LREN3',
            // 'IRBR3',
            // 'BRDT3',
            // 'CCRO3',
            // 'SUZB3',
            // 'RADL3',
            // 'GOAU4',
            // 'BBSE3',
            // 'CIEL3',
            // 'CVCB3',
            // 'NATU3',
            // 'BTOW3',
            // 'CMIG4',
            // 'SBSP3'
        ]

        var listaFinal = []

        ativos.forEach(element => {
            var valor = 1 + (999 - 1) * Math.random()
            valor = parseFloat(valor.toFixed(2))
            var ativoObj = { 'title': element, 'valor': valor }
            listaFinal.push(ativoObj)
        });

        return res.json(listaFinal)
    }
}

module.exports = new AtivoController()