const mongoose = require('mongoose');

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

const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;
