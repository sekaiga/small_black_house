/**
 * 
 */
app.controller('siteCtrl', function($scope,cookieService) {
	cookieService.getAllCookie();
	
	$scope.$watch('resource.WoodValue', function(newVal, oldVal) {
		if (newVal > 40)
			$scope.event.showhouse = true
	})
	$scope.$watch('resource.peopleMaxNumber', function(newVal, oldVal) {
		if (newVal >= 10)
			$scope.event.showHunter = true
	})
	
	
})


app.service('cookieService',function($rootScope){
	this.setAllCookie = function(){
		var resource = $rootScope.resource;
		var houseStatus = $rootScope.houseStatus;
		var event = $rootScope.event;
		var cookie = {resource:resource,houseStatus:houseStatus,event:event};
		
		var exdate=new Date();
		exdate.setDate(exdate.getDate()+365);
		
		document.cookie = "cookie = "+JSON.stringify(cookie)+";expires="+exdate.toGMTString();
	}
	
	this.getAllCookie = function(){
		console.log(document.cookie);	
		if(document.cookie.length==0)
			return;
		eval ("var " + document.cookie);
		console.log(cookie)
		$rootScope.resource = cookie.resource;
		$rootScope.houseStatus = cookie.houseStatus;
		$rootScope.event = cookie.event;
	}
})

