var mongoose = require('mongoose');  //this is the mongoose MODULE.
require('./mongoose.js'); //this is the mongoose.js FILE
//get the user model from our mongoose.js FILE!
var User = mongoose.model('User');
module.exports = function Routes(app){

	app.get('/', function(req,res){ 
		res.render('index', { title: 'MEAN stack with Codingdojo!' }); 
	}); 

	app.post('/addUser', function(req, res){
		new_user = new User(req.body);
		new_user.save(function(errors){
			if(errors){
				res.redirect('/')
			}
			else {
				res.redirect('/users')
			}
		})
	})

	app.get('/users', function(req, res){
		// use the User model to get all of the users!
		res.render('users');
	})
	//BEGIN RESTFUL API  SERVER STUFF...TREY HAD TOO MUCH COFFEE...CAN'T TYPE
	app.get('/api/users', function(req, res){
		User.find({}, function(errors, results){
			res.json(results);
		});
	})

	app.post('/api/users', function(req, res){
		var new_user = new User(req.body);
		new_user.save(function(errors){
			if(errors){
				res.status(400).json({status: 'errors', errors: errors})
			}
			else{
				res.json(new_user)
			}
		})
	})
};