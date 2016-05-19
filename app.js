var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	
	.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'HomeController',
		activeButton : 'home'
	})
	
	.when('/blog', {
		templateUrl : 'pages/blog.html',
		controller : 'BlogController',
		activeButton : 'blog'
	})
	
	.when('/about', {
		templateUrl : 'pages/about.html',
		controller : 'AboutController',
		activeButton : 'about'
	})
	
	.otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope, $route) {
	$scope.$route = $route;
	$scope.message = 'Hello from HomeController';
	
});

app.controller('BlogController', function($scope, $route) {
	$scope.$route = $route;
	$scope.message = 'Hello from BlogController';

});

app.controller('AboutController', function($scope, $route) {
	$scope.$route = $route;
	$scope.message = 'Hello from AboutController';

});