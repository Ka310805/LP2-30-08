const mongoose = require('mongoose')

const conexao = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://user3tri:user3tri@fiaptecnico.g4zhz.mongodb.net/html5up')
}

const modelo = mongoose.Schema({
    estilo:String,
    imagem:String,
    titulo:String,
    texto:String,
    publicado:{type:Date, default:Date.now}
})