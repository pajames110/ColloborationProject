console.log("Entered the Logoutcontroller");
app.controller('LogoutController', function($scope, $rootScope, $http,
		$cookieStore) {
	$http.post("http://localhost:8080/CollaborationBackend/logout/"
			+ $rootScope.uname);
	$rootScope.uname = null;
	console.log("username:" + $rootScope.uname);
	console.log("uname in cookie:" + $cookieStore.get('uname'));
	$cookieStore.remove('uname');
	console.log("after deletion");
	console.log("uname in cookie:" + $cookieStore.get('uname'));

	console.log("logout controller called");
	$rootScope.userhome = false;
	$rootScope.login = true;
	$rootScope.register = true;
	$rootScope.userforum = false;
	$rootScope.adminforum = false;
	$rootScope.home = true;
	$rootScope.blogs = false;
	$rootScope.jobs = false;
	$rootScope.logout = false;
	$rootScope.friendslist = false;
	$rootScope.chat = false;
	$rootScope.userjobs = false;
	$rootScope.adminblog = false;
	$rootScope.allblogs = false;
});
