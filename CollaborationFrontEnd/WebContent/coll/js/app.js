
var app = angular.module('myApp', ['ngRoute']);

console.log("hi n app ");

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'coll/view/home.html'
   
  })

  .when('/blog', {
    templateUrl : 'coll/view/blog.html'
   
  })

  .when('/friend', {
    templateUrl : 'coll/view/friend.html'
   
  })
  
   .when('/job', {
    templateUrl : 'coll/view/job.html'
   
  })

  .otherwise({redirectTo: '/'});
});

