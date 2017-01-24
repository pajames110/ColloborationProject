
				app.controller("UserHomeController",function($scope,$http,$rootScope)	
						{	
					console.log("in userHome controller");
					$scope.findfriends=function()
					{
					console.log(" in findfriends function");
					console.log("name in  findfriends:"+$rootScope.uname);
							 $http.get("http://localhost:8080/CollaborationBackend/findFriends/"+$rootScope.uname)
							    .then(function (response) {
							    	
							    	$scope.friends = response.data;
							    	
							    	console.log("data:"+response.data);
							    
							    });}
					
					$scope.addfriend=function(user)
					{
						$scope.isDisabled=true;
						console.log("in addfriend");
						$scope.friend=user;
						
						console.log("friendname:"+$scope.friend.name);
						console.log("username:"+$rootScope.uname);
						var fr=
							{
								name:$rootScope.uname,
								friendname:$scope.friend.name
							}
						$http.post("http://localhost:8080/CollaborationBackend/addFriend/",fr);
						
					}
					
						});