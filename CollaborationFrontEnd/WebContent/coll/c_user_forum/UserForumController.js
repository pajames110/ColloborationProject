					console.log(" Entered userforum controller");

app.controller("UserForumController",function($scope,$http,$rootScope)	
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
					
					console.log(" in forum controller");
					
							 $http.get("http://localhost:8080/CollaborationBackend/viewForum")
							    .then(function (response) {
							    	
							    	$scope.forums = response.data;
							    	
							    	console.log("data:"+response.data);
							    });
							 $scope.newForum={};
								console.log("In Controller");
								$scope.addForum=function(newForum)
								{
									var dataObj = {
											category:$scope.category,
											topic:$scope.topic,
											question:$scope.question,
											
											
							 		};
									console.log("title:"+dataObj);
									 var res = $http.post('http://localhost:8080/CollaborationBackend/addForum',dataObj);
									 $http.get("http://localhost:8080/CollaborationBackend/viewForum")
								 	    .then(function (response) {$scope.forums = response.data;});
								 		res.success(function(data, status, headers, config) {
								 			$scope.message = "forum added successfully";
								 			console.log("status:"+status);
								 		});
								 		 
								};
								$scope.answer=function(forum)
								{
									$scope.answerforum=forum;
									
									var ans=
										{
									forumid:$scope.answerforum.forum_id,
									answer:$scope.answerforum.answer
										}	
									 $http.post('http://localhost:8080/CollaborationBackend/answerForum',ans);
									$http.get("http://localhost:8080/CollaborationBackend/viewForum")
								    .then(function (response) {
								    	
								    	$scope.forums = response.data;
								    	
								    	console.log("data:"+response.data);
								    });
									}
								$scope.viewanswers=function(forum)
								{
									$scope.answerforum=forum;
									console.log("forumid:"+$scope.answerforum.forum_id);
									 $http.get("http://localhost:8080/CollaborationBackend/viewAnswers/"+$scope.answerforum.forum_id)
									    .then(function (response) {
									    	
									    	$scope.ansforums = response.data;
									    	
									    	console.log("data:"+response.data);
									    });
								}
				$scope.editForum=function(forum)
				{
					console.log("inside editforum");
					console.log("forum:"+forum);
					$scope.forumedit=forum;
				}
				$scope.saveEdit=function()
				{
					console.log("in saveEdit");
					var edit=
				
					{
							forum_id:$scope.forumedit.forum_id,
							category:$scope.forumedit.category,
							topic:$scope.forumedit.topic,
							question:$scope.forumedit.question,
							answer:$scope.forumedit.answer
						}
					$http.put("http://localhost:8080/CollaborationBackend/updateForum",edit);
					 $http.get("http://localhost:8080/CollaborationBackend/viewForum")
					    .then(function (response) {
					    	
					    	$scope.forums = response.data;
					    	
					    	console.log("data:"+response.data);
					    });
				}
				$scope.deleteForum=function(forumedit)
				{
					var del=
						{ 
					forum_id:$scope.forumedit.forum_id
						}
				$http.post("http://localhost:8080/CollaborationBackend/deleteForum",del)
					
					 $http.get("http://localhost:8080/CollaborationBackend/viewForums")
					    .then(function (response) {
					    	$scope.forums = response.data;
					    	console.log("data:"+response.data);
					    });
				}
						});	