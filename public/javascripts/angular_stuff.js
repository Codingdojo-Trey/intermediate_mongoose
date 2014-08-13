var app = angular.module('willy_norman', []);

app.factory('bikeFactory', function($http){
	var factory = {}
	var users;
	factory.getUsers = function(callback){
		$http.get('/api/users').success(function(data){
			users = data;
			callback(users);
		})
	} 

	factory.createUser = function(object){
		//make api call with object
		$http.post('/api/users', object).success(function(data){
			users.push(data)
		}).error(function(data){
			alert('you fail!');
			console.log(data)
		})
	}

	return factory;
})

app.controller('julianController', function($scope, bikeFactory){
	$scope.addUser = function(){
		bikeFactory.createUser($scope.newUser);
	}

	bikeFactory.getUsers(function(data){
		$scope.users = data;
	});
})
