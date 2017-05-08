/**
 * 
 */
app.controller('groundController', function($scope) {
	$scope.woodAdd = function() {
		if (!$scope.resource.WoodValue) {
			$scope.resource.WoodValue = 0;
		}
		$scope.resource.WoodValue += 10;
		$scope.queue.push0("add 10 wood");
		setCookie("WoodValue",$scope.resource.WoodValue);
	}
})