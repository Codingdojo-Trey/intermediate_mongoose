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
		User.find({}, function(errors, results){
			console.log(results)
			res.render('users', {users: results});
		});
	})
};