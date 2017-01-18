
var app = angular.module('myApp', ['ngRoute','ngCookies']);

console.log("hi n app ");

app.config(function($routeProvider) {
  
	$routeProvider
	
  .when('/', {
    templateUrl : 'coll/c_home/home.html'
   
  })

  .when('/blog', {
    templateUrl : 'coll/c_blog/blog.html'
   
  })

  .when('/friend', {
    templateUrl : 'coll/c_friend/friend.html'
   
  })
  
   .when('/job', {
    templateUrl : 'coll/c_job/job.html'
   
  })
  
  .when('/login', {
	  
    templateUrl : 'coll/c_user_login/login.html',
        controller : 'LoginController'	

   
  })
  
  .when('/register', {
	  
    templateUrl : 'coll/c_user/register.html',
    controller : 'RegisterController'	
   
  })
  
  .when('/about', {
    templateUrl : 'coll/c_about/about.html'
   
  })

  .otherwise({redirectTo: '/'});
});

