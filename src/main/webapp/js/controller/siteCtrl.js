/**
 * 
 */
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