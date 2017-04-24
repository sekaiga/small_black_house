/**
 * 
 */
var app = angular.module("myApp", [ 'ngRoute' ]);
app.config([ '$routeProvider', function($routerProvider) {
	$routerProvider.when('/', {
		templateUrl : 'house.html',
		controller : 'houseController'
	}).when('/ground', {
		templateUrl : 'ground.html',
		controller : 'groundController'
	})

} ])
app.run(function($rootScope) {
	$rootScope.resource = {
		'WoodValue' : 0
	}
	$rootScope.houseStatus = {
		temp : 0,
		houseSize : "冰冷的木屋",
		groundSize : "",
	}
	
});




function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=")
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1
			c_end = document.cookie.indexOf(";", c_start)
			if (c_end == -1)
				c_end = document.cookie.length
			return unescape(document.cookie.substring(c_start, c_end))
		}
	}
	return ""
}


var groundSize = ['静寂的森林'];
var houseSize = ['冰冷的木屋','温暖的木屋'];

var parseInthouseSize = function(houseIndex){
	return houseSize[houseIndex];
}

var parseIntgroundSize = function(groundIndex){
	return groundSize[groundIndex];
}
