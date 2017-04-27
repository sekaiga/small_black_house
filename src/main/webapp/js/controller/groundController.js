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
		var exdate=new Date();
		exdate.setDate(exdate.getDate()+365);
		document.cookie = "WoodValue=" + $scope.resource.WoodValue+
		";expires="+exdate.toGMTString();
	}
})