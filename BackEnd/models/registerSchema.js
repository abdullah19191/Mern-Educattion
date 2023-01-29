const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const enrollSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    courses: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
})

const Enrollment = mongoose.model('ENROLLMENT',enrollSchema);

module.exports = Enrollment;
