const express = require('express');

const app = express();

const PORT = 8000;

app.get('/',(req,res)=>{
    res.json({message:'hello world'});
})

app.listen(PORT,()=>{
    console.log('server is startend in ' + PORT + " PORT ")
})