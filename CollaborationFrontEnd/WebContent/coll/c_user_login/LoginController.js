console.log("Entered the Logincontroller");

app.controller("LoginController",['$cookieStore','$scope','$http','$location','$rootScope',
						function($cookieStore, $scope, $http, $location,
								$rootScope) {
							console.log("in login controller");
							$scope.login = function() {
								var logi = {
									name : $scope.name,
									password : $scope.password,

								}
								$http.post("http://localhost:8080/CollaborationBackend/authenticate",logi).then(
												function(response) {
													console.log("result data:"
															+ response.data);
													var r = response.data
															.toString();
													console
															.log("response:"
																	+ r);

													if (r == 1) {
														$rootScope.userhome = true;
														$rootScope.userjobs = true;
														$rootScope.adminblog = false;
														$rootScope.adminforum = false;
														$rootScope.register = false;
														$rootScope.home = false;
														$rootScope.addjobs = false;
														$rootScope.login = false;
														$rootScope.jobs = false;
														$rootScope.blogs = true;
														$rootScope.allblogs = true;
														$rootScope.chat = true;
														$rootScope.friendslist = true;
														$rootScope.logout = true;

														console
																.log('logout:'
																		+ $rootScope.logout);
														console
																.log("logged out:"
																		+ response.data);
														$rootScope.uname = $scope.name;
														$http.defaults.headers.common['Authorization'] = 'Basic '
																+ $rootScope.uname;
														$cookieStore
																.put(
																		'uname',
																		$rootScope.uname)

														console
																.log("uname:"
																		+ $rootScope.uname);
														$location.path('/');
													}
													if (r == 0) {
														$scope.name = "";
														$scope.password = "";
														$scope.message = "username/password incorrect";
														$location.path('/');
													}
													if (r == 2) {
														$rootScope.uname = $scope.name;
														$rootScope.home = false;
														$rootScope.login = false;
														$rootScope.register = false;
														$rootScope.jobs = true;
														$rootScope.adminblog = true;
														$rootScope.adminforum = true;
														$rootScope.blogs = false;
														$rootScope.chat = false;
														$rootScope.logout = true;
														$rootScope.blogs = false;
														$rootScope.allblogs = false;
														$rootScope.userforum = false;
														$rootScope.userjobs = false;
														$location
																.path('/adminHome');
													}
												});
							}
						} ]);


app.run(function($rootScope, $location, $cookieStore, $http) {

	$rootScope.$on('$locationChangeStart', function(event, next, current) {
		console.log("$locationChangeStart")

		// redirect to login page if not logged in and trying to access a
		// restricted page
		var restrictedPage = $.inArray($location.path(), [ '/', '/', '/login',
				'/register', '/home' ]) === -1;
		console.log("restrictedPage:" + restrictedPage)
		var loggedIn = $rootScope.uname;
		console.log("loggedIn:" + loggedIn)

		if (!loggedIn) {

			if (restrictedPage) {
				console.log("Navigating to login page:")

				$location.path('/login');
			}
		}

	});

	// keep user logged in after page refresh
	$rootScope.uname = $cookieStore.get('uname') || {};
	if ($rootScope.uname) {
		$http.defaults.headers.common['Authorization'] = 'Basic '
				+ $rootScope.uname;
	}
});
