/**
 * 
 */
var app = angular.module("myApp", []);
app.run(function($rootScope) {
	$rootScope.aaa = "123";
});
app.controller('siteCtrl', function($scope) {
	var wood = getCookie('WoodValue');
	if(wood)
	$scope.WoodValue=parseInt(wood);

})
app.controller('HomeController', function($scope) {
	$scope.woodAdd = function(){
		if(!$scope.WoodValue){
			$scope.WoodValue=0;
		}
		$scope.WoodValue+=10;
		document.cookie="WoodValue="+$scope.WoodValue;
	}
})

function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}
