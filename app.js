var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	
	.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'HomeController'
	})
	
	.when('/blog', {
		templateUrl : 'pages/blog.html',
		controller : 'BlogController'
	})
	
	.when('/about', {
		templateUrl : 'pages/about.html',
		controller : 'AboutController'
	})
	
	.otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
	$scope.message = 'Hello from HomeController';
	
	$scope.getClass = function (path) {
		return ($location.path().substr(0, path.length) === path) ? 'w3-lime' : '';
	}
});

app.controller('BlogController', function($scope) {
	$scope.message = 'Hello from BlogController';
	
	$scope.getClass = function (path) {
		return ($location.path().substr(0, path.length) === path) ? 'w3-lime' : '';
	}
});

app.controller('AboutController', function($scope) {
	$scope.message = 'Hello from AboutController';
	
	$scope.getClass = function (path) {
		return ($location.path().substr(0, path.length) === path) ? 'w3-lime' : '';
	}
});