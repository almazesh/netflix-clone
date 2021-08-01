const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('../schema/schema')
const moongose = require('mongoose')

const app = express()
const PORT = 3003

moongose.connect('mongodb+srv://Almaz:pass12@cluster0.fvnc8.mongodb.net/Netflix?retryWrites=true&w=majority' , { useUnifiedTopology: true})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true,
}))

const dbConnect = moongose.connection

dbConnect.on('error' , err => console.log('Error'))
dbConnect.once('open' ,() => console.log('Connecteds'))

app.listen(PORT , err =>{
    err ? console.log(err) : console.log('Server started')
})  