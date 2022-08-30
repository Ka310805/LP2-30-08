//importar o pacote express
const express = require('express')
//executar o express applicattion
const app = express()

//configurar a porta remota e local
const porta = process.env.PORT || 3000

//importar o pacote consign
const consign = require('consign')
//executar e configurar o consign
consign().include('./routes').into(app)

//defionir a pasta dos assets (css, images, js)
app.use(express.static('./src/'))

//definir o express com o urlencoded
app.use(express.urlencoded({extended:false}))

//definir os conteudos com acesso externo
module.exports = {app,porta}