const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

//connect to the db
mongoose.connect('mongodb://127.0.0.1:27017/todo_db');

//acquire connection
const db = mongoose.connection;

//on error
db.on('error', console.log.bind(console, 'error connecting db'));

//went well
db.once('open', function () {
    console.log('Connected to the DB successfully');
})