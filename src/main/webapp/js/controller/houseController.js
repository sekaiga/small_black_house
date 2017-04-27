/**
 * 
 */
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
	$scope.buildHouse = function(){
		//获得房子大小 知道这次要多少木头
		var woodCount = $scope.resource.peopleMaxNumber * 10; 
		//判断木头是否够
		if($scope.resource.WoodValue >= woodCount){
			//造房子减木头
			$scope.resource.peopleMaxNumber += 5;
			$scope.resource.WoodValue -= woodCount
		}else{
			//TODO add message
			console.log("no enough wood,need "+woodCount)
		}
	}
})