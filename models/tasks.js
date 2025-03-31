const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
    desc: {
        type: String,
        reuired: true
    },
    date: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;