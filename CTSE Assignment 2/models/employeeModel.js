const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    title:{
        type: String,
        trim: true,
        required: true
    },

    age:{
        type: Number,
        trim: true,
        required: true
    },

    images:{
        type: Object,
        
    },

    salary:{
        type: Number,
        trim: true,
        required: true
    },
    
}, {
    timestamps: true
})

module.exports = mongoose.model("Employee", employeeSchema)