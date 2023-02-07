const express = require('express');
const path = require('path');
const port = 8000;

//initialize app
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // `${__dirname}/views` also works
app.use(express.urlencoded({ extended: true })); // parser used -- extened is provided explicitly
app.use(express.static('assets'));


app.listen(port, function (err) {
    if (err) {
        console.log(`Could not start the server: ${err}`);
        return;
    }

    console.log(`Server is started on port: ${port}`);
});