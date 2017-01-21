app.controller("FriendsListController",function($scope,$http,$rootScope)	
						{	
					$rootScope.userhome=true;
					$rootScope.userforum=true;
					$rootScope.userjobs=true;
					$rootScope.adminblog=false;
					$rootScope.adminforum=false;
					$rootScope.register=false;
					$rootScope.home=false;
					$rootScope.addjobs=false;
					$rootScope.login=false;
					$rootScope.jobs=false;
					$rootScope.blogs=true;
					$rootScope.allblogs=true;
					$rootScope.chat=true;
					$rootScope.friendslist=true;
					$rootScope.logout=true;
					console.log("in friendslist controller");
					
					console.log("name in  friendslist:"+$rootScope.uname);
							 $http.get("http://localhost:8080/CollaborationBackend/viewFriends/"+$rootScope.uname)
							    .then(function (response) {
							    	
							    	$scope.friendslist = response.data;
							    	
							    	console.log("data:"+response.data);
							    
							    });
						});