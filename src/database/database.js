const mongoose = require('mongoose');
const remoteurl = 'mongodb+srv://root:root@cluster0.m0s67.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const localurl = 'mongodb://localhost:27017/paletas-db';

const connectToDatabase = () => {
  mongoose
    .connect(`${remoteurl}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MONGO DB CONECTADO');
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
};

module.exports = connectToDatabase;
