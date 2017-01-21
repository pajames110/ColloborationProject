app.controller("AdminJobsController",function($scope,$http,$rootScope)	
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
					$rootScope.allblogs=false;
					$rootScope.userforum=false;
					$rootScope.userjobs=false;
					
					console.log(" in jobs controller");
					
							 $http.get("http://localhost:8080/CollaborationBackend/viewJobs")
							    .then(function (response) {
							    	
							    	$scope.jobs = response.data;
							    	
							    	console.log("data:"+response.data);
							    });
							 $scope.newJobs={};
								console.log("In Controller");
								$scope.addJobs=function(newJobs)
								{
									console.log("Inside Addjob Function");
									var dataObj = {
											job_name:$scope.job_name,
											job_role:$scope.job_role,
											job_requirements:$scope.job_requirements,
											job_description:$scope.job_description
							 		};
									console.log("title:"+dataObj);
									 var res = $http.post('http://localhost:8080/CollaborationBackend/addJobs',dataObj);
									 $http.get("http://localhost:8080/CollaborationBackend/viewJobs")
								 	    .then(function (response) {$scope.jobs = response.data;});
								 		res.success(function(data, status, headers, config) {
								 			$scope.message = data;
								 			console.log("status:"+status);
								 		});
								 		 
								};
				$scope.editJob=function(job)
				{
					console.log("inside editjob");
					console.log("job:"+job);
					$scope.jobedit=job;
				}
				$scope.saveEdit=function()
				{
					console.log("in saveEdit");
					var edit=
						{
							job_id:$scope.jobedit.job_id,
							job_name:$scope.jobedit.job_name,
							job_role:$scope.jobedit.job_role,
							job_requirements:$scope.jobedit.job_requirements,
							job_description:$scope.jobedit.job_description
						}
					$http.put("http://localhost:8080/CollaborationBackend/updateJob",edit);
					 $http.get("http://localhost:8080/CollaborationBackend/viewJobs")
					    .then(function (response) {
					    	
					    	$scope.jobs = response.data;
					    	
					    	console.log("data:"+response.data);
					    });
				}
				$scope.deleteJob=function(jobedit)
				{
					console.log("in deletejob");
					var del=
						{
					job_id:$scope.jobedit.job_id
						}
				$http.post("http://localhost:8080/CollaborationBackend/deleteJob",del);
					 $http.get("http://localhost:8080/CollaborationBackend/viewJobs")
					    .then(function (response) {
					    	
					    	$scope.jobs = response.data;
					    	
					    	console.log("data:"+response.data);
					    });
				}
						});	