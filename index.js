const express = require('express');
const path = require('path');
const port = 8000;

//initialize app
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // `${__dirname}/views` also works
app.use(express.urlencoded({ extended: true })); // parser used -- extened is provided explicitly
app.use(express.static('assets'));

var tasks = [
    {
        "description": "Here is a random thought!! Drink water <3",
        "category": "personal",
        "due_date": "12/02/2020"
    },
    {
        "description": "Here is a random thought!! Drink water <3",
        "category": "personal",
        "due_date": "12/02/2020"
    },

    {
        "description": "Here is a random thought!! Drink water <3",
        "category": "personal",
        "due_date": "12/02/2020"
    },

    {
        "description": "Here is a random thought!! Drink water <3",
        "category": "personal",
        "due_date": "12/02/2020"
    }
]

app.get('/', function (req, res) {
    return res.render('home', {
        title: "toDoList",
        tasks: tasks
    });
});

app.listen(port, function (err) {
    if (err) {
        console.log(`Could not start the server: ${err}`);
        return;
    }

    console.log(`Server is started on port: ${port}`);
});