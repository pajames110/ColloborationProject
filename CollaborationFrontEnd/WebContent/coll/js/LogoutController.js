

app.controller('LogoutController', function($scope,$rootScope) {
	console.log("In LogoutController..")
       $scope.message = "You successfully loggedout";
	
	$rootScope.isLoggedIn="false"

});


