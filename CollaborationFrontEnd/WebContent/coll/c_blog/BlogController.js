					console.log(" Entered blog controller");

app.controller("BlogController",function($scope,$http,$rootScope)	
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
					
					console.log(" in blog controller");
					console.log("name in allblogs:"+$rootScope.uname)
					$http.get("http://localhost:8080/CollaborationBackend/viewMyBlogs/"+$rootScope.uname)
							    .then(function (response) {
							    	
							    	$scope.blogs = response.data;
							    	
							    	console.log("data:"+response.data);
							    });
							 $scope.newBlog={};
								console.log("In Controller");
								$scope.addBlog=function(newBlog)
								{
									var dataObj = {
											title:$scope.title,
											description:$scope.description,
											category:$scope.category,
											postedby:$rootScope.uname
							 		};
									console.log("title:"+dataObj);
									 var res = $http.post('http://localhost:8080/CollaborationBackend/addBlog',dataObj);
									 $http.get("http://localhost:8080/CollaborationBackend/viewMyBlogs/"+$rootScope.uname)
								 	    .then(function (response) {$scope.blogs = response.data;});
								 		res.success(function(data, status, headers, config) {
								 			$scope.message = "Blog added successfully" ;
								 			console.log("status:"+status);
								 		});
								 		 
								};
				$scope.editBlog=function(blog)
				{
					console.log("inside editblog");
					console.log("blog:"+blog);
					$scope.blogedit=blog;
				}
				$scope.saveEdit=function()
				{
					console.log("in saveEdit");
					var edit=
						{
							blog_id:$scope.blogedit.blog_id,
							category:$scope.blogedit.category,
							title:$scope.blogedit.title,
							description:$scope.blogedit.description,
							postedby:$rootScope.uname
						}
					$http.put("http://localhost:8080/CollaborationBackend/updateBlog",edit);
					$http.get("http://localhost:8080/CollaborationBackend/viewMyBlogs/"+$rootScope.uname)
					    .then(function (response) {
					    	
					    	$scope.blogs = response.data;
					    	
					    	console.log("data:"+response.data);
					    });
				}
				$scope.deleteBlog=function(blogedit)
				{
					var del=
						{
					blog_id:$scope.blogedit.blog_id
						}
				$http.post("http://localhost:8080/CollaborationBackend/deleteBlog",del);
					$http.get("http://localhost:8080/CollaborationBackend/viewMyBlogs/"+$rootScope.uname)
					    .then(function (response) {
					    	
					    	$scope.blogs = response.data;
					    	
					    	console.log("data:"+response.data);
					    });
				}
						});