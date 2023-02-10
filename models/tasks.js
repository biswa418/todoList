const mongoose = require('mongoose');

//created schema
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: false
    },
    due_date: {
        type: String,
        required: true
    }
});

//create model
const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;
