const express = require('express');
const path = require('path');
const port = 8000;

//setting up the database
const db = require('./config/mongoose');
const Tasks = require('./models/tasks');


//initialize app
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // `${__dirname}/views` also works
app.use(express.urlencoded({ extended: true })); // parser used -- extened is provided explicitly
app.use(express.static('assets'));

//load the home page
app.get('/', function (req, res) {
    Tasks.find({}, function (err, tasks) {
        if (err) {
            console.log('could not fetch data from db');
            return;
        }

        return res.render('home', {
            title: "Todo List",
            tasks: tasks
        });

    });
});

// adding the tasks
app.post('/addTask', function (req, res) {
    let dat = new Date(req.body.due).toLocaleString("en-GB", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });

    if (dat == "Invalid Date") {
        dat = "NO DEADLINE"
    }

    Tasks.create({
        description: req.body.desc,
        category: req.body.category,
        due_date: dat
    }, function (err, task) {
        if (err) {
            console.log('Could not add the task', err);
            return;
        }

        return res.redirect('back');
    });

});

//delete by getting the ids
app.post('/delete', function (req, res) {
    let keys = Object.keys(req.body);

    for (let k of keys) {
        Tasks.findByIdAndDelete(req.body[k], function (err) {
            if (err) {
                console.log('Could not delete the entry with id', id);
                return;
            }
        });
    }

    return res.redirect('back');
});

//Start the server
app.listen(port, function (err) {
    if (err) {
        console.log(`Could not start the server: ${err}`);
        return;
    }

    console.log(`Server is started on port: ${port}`);
});