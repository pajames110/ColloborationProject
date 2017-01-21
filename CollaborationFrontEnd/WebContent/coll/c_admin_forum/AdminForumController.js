console.log(" Entered adminforum controller");
app.controller("AdminForumController", function($scope, $http, $rootScope) {
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

	console.log(" in adminforum controller");

	$http.get("http://localhost:8080/CollaborationBackend/viewForums").then(
			function(response) {

				$scope.forums = response.data;

				console.log("data:" + response.data);
			});
	$scope.newForum = {};
	console.log("In Controller");
	$scope.addForum = function(newForum) {
		var dataObj = {
			category : $scope.category,
			topic : $scope.topic,
			question : $scope.question,

		};
		console.log("title:" + dataObj);
		var res = $http.post('http://localhost:8080/CollaborationBackend/addForum',
				dataObj);
		$http.get("http://localhost:8080/CollaborationBackend/viewForums").then(
				function(response) {
					$scope.forums = response.data;
				});
		res.success(function(data, status, headers, config) {
			$scope.message = "forum added successfully";
			console.log("status:" + status);
		});

	};
	$scope.appdisapp = function(adminforum) {

		console.log("inside appdisappforum");
		console.log("adminforum:" + adminforum);
		$scope.forumstatus = adminforum;
	}
	$scope.approveForum = function() {
		console.log("category:" + $scope.forumstatus.category);
		console.log("in approveforum");
		var edit = {
			forum_id : $scope.forumstatus.forum_id,
			category : $scope.forumstatus.category,
			topic : $scope.forumstatus.topic,
			question : $scope.forumstatus.question,
			answer : $scope.forumstatus.answer,
			status : true
		}
		$http.put("http://localhost:8080/CollaborationBackend/updateForum", edit);
		$http.get("http://localhost:8080/CollaborationBackend/viewForums").then(
				function(response) {

					$scope.forums = response.data;

					console.log("data:" + response.data);
				});
	}
	$scope.disapproveForum = function() {
		console.log("in disapproveforum");
		var edit = {
			forum_id : $scope.forumstatus.forum_id,
			category : $scope.forumstatus.category,
			topic : $scope.forumstatus.topic,
			question : $scope.forumstatus.question,
			answer : $scope.forumstatus.answer,
			status : false
		}
		$http.put("http://localhost:8080/CollaborationBackend/updateForum", edit);
		$http.get("http://localhost:8080/CollaborationBackend/viewForums").then(
				function(response) {

					$scope.forums = response.data;

					console.log("data:" + response.data);
				});
	}

});