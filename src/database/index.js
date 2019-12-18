const mongoose = require('mongoose')

class Database {

    connect() {

        try {
            mongoose.connect('mongodb+srv://admin:admin@desafiotoro-uzq3w.mongodb.net/test?retryWrites=true&w=majority', {
                useNewUrlParser: true
            })

        } catch (e) {
            return res.status(400).send('Base de dados indisponível')
        }


    }
}

module.exports = new Database()