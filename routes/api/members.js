// to place all related apis at one place
//In order to work with express router we use express router
const express = require('express');

const router = express.Router();

const members = require('../../Members');


//this routed get all meebers using postman you can chechk
//get method htt[://localhost:5000/api/memebers
//app.get('/api/members',(req,res) => res.json(members))
//when we use router so instead of app we use router
// router.get('/api/members',(req,res) => res.json(members))
//since we have the the routes in the index.js file we dont need then here.
router.get('/',(req,res) => res.json(members))

//get single member
router.get('/:id', (req, res) => {
  //if the requested id is not found use below var to show msg
  
  const found = members.some(member => member.id === parseInt(req.params.id));
  // some return true or false based on consitio n
  
  if(found){
  res.json(members.filter(member => member.id === parseInt(req.params.id)));
  //as req.params.id is string and member.id is int so we need conversion here hence we use parseInt
  } else {
    res.status(400).json({msg: `No Memeber with the id of ${req.params.id}`});
    //when user makes bad req we send him the status with better message in json form
  }
}); 
//http://localhost:5000/api/members/2
//id is url parameter we use req object to grab whatever is there

// app.get('/', (req, res) => {
//   // res.send('<h1>Hello World!!!</h1>');
//   //we have bunch of diffrent option like send but we cou;d send the file as well
//   res.sendFile(path.join(__dirname, 'public', 'index.html')) // loading html file here..
  
//   //__dirname - to get cureent directory
//   //'public' by going to this folder public
//   // and load file called index.html
//   //json, render, template like pug or ejr
// })


//create meber
//whenevwer you creste something on server or adding to database we wanna make a posrt reqest in most cases
// so to handle a post request we say router.post

router.post('/', (req, res) => {
  res.send(req.body); 
  //by sending this via postman we don't get anythig so we need to use body parser so that we can parse the data that we are sending in thw body
  //we use to install a seppareate bodu parser which is a third party pkg that we have to install however with newst version of
  //express we don't have to do that there is one included with express we just have to intialises it as middlesware so go to middleware. app.use(express.json) allow o handle raw json.
  //we also want to handle form sublission so we also gonna use
  //app.use(express.urlencodded({extended: false})) so this we ahndle url encoded data
  //http://localhost:5000/api/members
  //postman header will be content type : application json
  //body is raw and the json
  //{"name":"naren","email":"naru@gma.com"}
  //methos is post
});

module.exports = router;

//in order it to actual work we are going to index.js we write app.use write the patrent route and second param is the route file