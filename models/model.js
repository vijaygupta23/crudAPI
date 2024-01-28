//const express = require('express');
const mongoose=require('mongoose')
 

const modelSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    tech: {
        type:String,
        required:true
    }
})

module.exports=mongoose.model('User', modelSchema)





