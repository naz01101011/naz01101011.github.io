app.controller('mainCtrl', function($scope) {
	$scope.pageName = 'Page Name';
});

app.controller('HomeController', function($scope) {
	$scope.message = 'Hello from HomeController';
});

app.controller('BlogController', function($scope) {
	$scope.message = 'Hello from BlogController';
});

app.controller('AboutController', function($scope) {
	$scope.message = 'Hello from AboutController';
});