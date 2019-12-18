const mongoose = require('mongoose')

const Conta = new mongoose.Schema({
    saldo: {
        type: Number,
        required: true
    },
    ativos: {
        type: Array,
        required: false
    }
});

module.exports = mongoose.model("Conta", Conta)