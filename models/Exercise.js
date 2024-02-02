const mongoose = require('mongoose')
const Schema=mongoose.Schema

const ExerciseSchema= new Schema({
    Title:{
        type:String,
        required: true
    },
    Load:{
        type:Number,
        required: true
    },
    Reps:{
        type:Number,
        required: true
    }},{ timestamps : true });


const Exercise=mongoose.model('Exercise', ExerciseSchema )
module.exports= Exercise;