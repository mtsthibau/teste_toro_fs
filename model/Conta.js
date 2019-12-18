const mongoose = require('mongoose')

const Conta = new mongoose.Schema({
    saldo: {
        type: mongoose.Decimal128,
        required: true
    },
    ativos: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model("Conta", Conta)