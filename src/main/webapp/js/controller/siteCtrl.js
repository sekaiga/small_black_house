/**
 * 
 */
app.controller('siteCtrl', function($scope) {
	var wood = getCookie('WoodValue');
	if (wood)
		$scope.resource.WoodValue = parseInt(wood);

	var houseSize = getCookie('houseSize');
	if (houseSize)
		$scope.houseStatus.houseSize = parseInthouseSize(houseSize);
	// var temp = parseInthouseSize(houseSize);

	var groundSize = getCookie('groundSize');
	if (groundSize)
		$scope.houseStatus.groundSize = parseIntgroundSize(groundSize);
	
	var peopleMaxNumber = getCookie("peopleMaxNumber");
	if (peopleMaxNumber)
		$scope.resource.peopleMaxNumber = parseInt(peopleMaxNumber);
	
	var peopleCurrentNumber = getCookie("peopleCurrentNumber");
	if (peopleCurrentNumber)
		$scope.resource.peopleCurrentNumber = parseInt(peopleCurrentNumber);

	$scope.$watch('resource.WoodValue', function(newVal, oldVal) {
		if (newVal > 40)
			$scope.event.showhouse = true
	})
	$scope.$watch('resource.peopleMaxNumber', function(newVal, oldVal) {
		if (newVal >= 10)
			$scope.event.showHunter = true
	})
})