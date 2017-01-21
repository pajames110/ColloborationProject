					console.log(" Entered adminblog controller");

app.controller("AdminBlogController",function($scope,$http,$rootScope)	
						{	
					$rootScope.home=false;
					$rootScope.login=false;
					$rootScope.register=false;
					$rootScope.jobs=true;
					$rootScope.adminblog=true;
					$rootScope.adminforum=true;
					$rootScope.blogs=false;
					$rootScope.chat=false;
					$rootScope.logout=true;
					$rootScope.blogs=false;
					$rootScope.allblogs=true;
					$rootScope.userforum=false;
					$rootScope.userjobs=false;
					
					console.log(" in adminblog controller");
					
							 $http.get("http://localhost:8080/CollaborationBackend/viewBlogs")
							    .then(function (response) {
							    	
							    	$scope.blogs = response.data;
							    	
							    	console.log("data:"+response.data);
							    });
							
				$scope.appdisapp=function(adminblog)
				{
					console.log("inside appdisappblog");
					console.log("adminblog:"+adminblog);
					$scope.blogstatus=adminblog;
					
				}
				$scope.approveBlog=function()
				{
					console.log("postedby:"+$scope.blogstatus.postedby);
					console.log("in approveblog");
					var edit=
						{
							blog_id:$scope.blogstatus.blog_id,
							category:$scope.blogstatus.category,
							title:$scope.blogstatus.title,
							description:$scope.blogstatus.description,
							postedby:$scope.blogstatus.postedby,
							status:true
						}
					
					$http.put("http://localhost:8080/CollaborationBackend/updateBlog",edit);
					 $http.get("http://localhost:8080/CollaborationBackend/viewBlogs")
					    .then(function (response) {
					    	
					    	$scope.blogs = response.data;
					    	
					    	console.log("data:"+response.data);
					    });
				}
				$scope.disapproveBlog=function()
				{
					console.log("postedby:"+$scope.blogstatus.postedby);
					console.log("in disapproveblog");
					var edit=
						{
							blog_id:$scope.blogstatus.blog_id,
							category:$scope.blogstatus.category,
							title:$scope.blogstatus.title,
							description:$scope.blogstatus.description,
							postedby:$scope.blogstatus.postedby,
							status:false
						}
					$http.put("http://localhost:8080/CollaborationBackend/updateBlog",edit);
					 $http.get("http://localhost:8080/CollaborationBackend/viewBlogs")
					    .then(function (response) {
					    	
					    	$scope.blogs = response.data;
					    	
					    	console.log("data:"+response.data);
					    });
				}
				
						});		