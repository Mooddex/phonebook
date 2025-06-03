const express = require('express');
const _ = require('lodash')
const app = express(); 
const PORT =8000;

const people ={
    'ahmed':{
        'id': 1 ,
        'name':'ahmed salah',
        'number':11111
    },
    'mohamed':{
        'id': 2 ,
        'name':'mohamed salah',
        'number':22222
    },
    'mahmoud':{
        'id': 3 ,
        'name':'mahmoud salah',
        'number':33333 ,
    },        
}


app.get('/' , (req , res)=>{
    res.sendFile( __dirname + '/index.html')
})

app.get('/api/persons' , (req,res)=>{
    console.log(people)
   res.json(people)

})
app.get('/info', (req,res)=>{
    const reqTime= Date(req).toLocaleString();
    const peopleCount =_.size(people)
    const message =`phonebook has info for ${peopleCount} people <br>${reqTime} `
    res.send(message)
    console.log(message)
    console.log(reqTime)
})

app.listen(PORT , ()=>{
console.log(`server is running on ${PORT}`)
})