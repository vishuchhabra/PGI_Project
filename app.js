var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var mongojs = require('mongojs');
var db = mongojs('nriapp', ['users']);
var app = express();


// BODY PARSER MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented:false}));


//  STATIC BODY PATH
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',function(req,res){
    db.users.find(function(err,docs){
        console.log(docs);
        res.render('index',{
            title:'Customers',
            users: users
        });
    })  
});

app.post('/users/add',function(req,res){
      console.log(req.body.first_name);
      console.log(req.body.email);
      console.log(req.body.phone);
      console.log(req.body.message);
      console.log('form submitted successfully');
      db.users.insert({
          name: req.body.first_name,
          email: req.body.email,
          phone: req.body.phone,
          message: req.body.message,
      })
});

app.listen(3000,function(){
    console.log('server started on port 3000 ');
});





