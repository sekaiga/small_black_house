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
})