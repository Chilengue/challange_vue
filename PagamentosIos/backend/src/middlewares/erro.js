const express =require('express')
const app=express();

app.use((req, res, next)=>
{
    console.log("oi sou mildware");
    next();
})