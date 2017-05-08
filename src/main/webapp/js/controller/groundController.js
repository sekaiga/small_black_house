/**
 * 
 */
app.controller('groundController', function($scope,cookieService) {
	$scope.woodAdd = function() {
		if (!$scope.resource.WoodValue) {
			$scope.resource.WoodValue = 0;
		}
		$scope.resource.WoodValue += 10;
		$scope.queue.push0("add 10 wood");
		cookieService.setAllCookie();
	}
})