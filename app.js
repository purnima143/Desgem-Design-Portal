const express= require('express')
const app= express()
const mongoose = require('mongoose')
const { MONGOURI } = require('./keys')
const PORT =5000
//r3sUsmve94rjFzx
app.use(express.json())

require('./models/user')
require('./models/post')

app.use(require('./routes/auth'))
app.use(require('./routes/post'))

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yea")
})
mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
})

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})