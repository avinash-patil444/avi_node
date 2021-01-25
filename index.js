const express = require('express');

const path = require('path'); //to deal with file path its node module.

const app = express();

//Body parser middleware
app.use(express.json()); // it give us the data tat we send via req.
app.use(express.urlencoded({extended: false}))

//const logger = require('./middleware/logger');
//logger is middleware implemented in middleware folder so we make it require

//Init middleware
//WhenEver we hit the req the middleware is called wecan write any code in here
//we can access any req and res
//console.log(`${req.protocol}://${req.get('host')}${req.origionalUrl}`)
//we access diffrent parts of Url

//app.use(logger)



//set static folder
app.use(express.static(path.join(__dirname, 'public'))); // use() is method we use only when we want to include middleware
//set public as static folder and get rid of app.get

//members api routes
app.use('/api/members', require('./routes/api/members')) // parent route that we want is firat param
//second param is requiring the file that we want

const PORT = process.env.PORT || 5000; //if available port in environment set it otherwise use 5000

app.listen(PORT, () => console.log(`server started on port ${PORT}`));