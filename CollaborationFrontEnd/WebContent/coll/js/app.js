var app = angular.module('myApp', [ 'ngRoute', 'ngCookies' ]);

console.log("hi n app ");

app.config(function($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl : 'coll/c_home/home.html',
		controller : 'UserHomeController'

	}).when('/home', {
		templateUrl : 'coll/c_home/home.html',
		controller : 'UserHomeController'

	}).when("/allblogs", {
		templateUrl : "coll/c_allblogs/allblogs.html",
		controller : "AllBlogsController"

	}).when("/userjobs", {
		templateUrl : "coll/c_user_jobs/userjobs.html",
		controller : "UserJobsController"

	}).when("/job", {
		templateUrl : "coll/c_admin_job/jobs.html",
		controller : "AdminJobsController"
	})

	.when("/userforum", {
		templateUrl : "coll/c_user_forum/userforum.html",
		controller : "UserForumController"

	}).when("/adminforum", {
		templateUrl : "coll/c_admin_forum/adminforum.html",
		controller : "AdminForumController"

	}).when("/chat", {
		templateUrl : "coll/c_chat/chat.html",
		controller : 'chatController'

	})

	.when('/blog', {
		templateUrl : 'coll/c_blog/blog.html',
		controller : 'BlogController'

	}).when('/adminblog', {
		templateUrl : 'coll/c_blog_admin/adminblog.html',
		controller : 'AdminBlogController'

	}).when("/friendslist", {
		templateUrl : "coll/c_friend/friendslist.html",
		controller : 'FriendsListController'

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

	.when('/logout', {
		templateUrl : 'coll/c_user_login/logout.html',
		controller : 'LogoutController'

	})

	.otherwise({
		redirectTo : '/'
	});
});
