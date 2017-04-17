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
app.controller('siteCtrl', function($scope) {
	var wood = getCookie('WoodValue');
	if (wood)
		$scope.resource.WoodValue = parseInt(wood);

	var houseSize = getCookie('houseSize');
	if (houseSize)
		$scope.houseStatus.houseSize=parseInthouseSize(houseSize);
		//var temp =  parseInthouseSize(houseSize);
		
	var groundSize = getCookie('groundSize');
	if (groundSize)
		$scope.houseStatus.groundSize = parseIntgroundSize(groundSize);
})
app.controller('groundController', function($scope) {
	$scope.woodAdd = function() {
		if (!$scope.resource.WoodValue) {
			$scope.resource.WoodValue = 0;
		}
		$scope.resource.WoodValue += 10;
		var exdate=new Date();
		exdate.setDate(exdate.getDate()+365);
		document.cookie = "WoodValue=" + $scope.resource.WoodValue+
		";expires="+exdate.toGMTString();
	}
})
app.controller('houseController', function($scope) {
	$scope.fire = function() {
		if ($scope.resource.WoodValue > 0) {
			$scope.resource.WoodValue -= 1;
			document.cookie = "WoodValue=" + $scope.resource.WoodValue;
		}
		if ($scope.houseStatus.temp == 0) {
			$scope.houseStatus.temp += 1;
			$scope.houseStatus.houseSize = "温暖的木屋";
			$scope.houseStatus.groundSize = "静寂的森林";
			document.cookie = "houseSize=" + 1;
			document.cookie = "groundSize=" + 0;
		}
	}
})

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
