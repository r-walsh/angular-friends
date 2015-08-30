var app = angular.module('friendsList');

app.controller('FriendController', function($scope, $http) {

	$scope.friends = [];

	$scope.friends = $http.get('friend-data.json')
		.then(function(response) {
			$scope.friends = response.data;
		}, function(response) {
			console.log('error getting data');
		});

	$scope.sortOptions = [
		{name: "Descending", value: true },
		{name: 'Ascending', value: false }
	];

	$scope.sortType = 'name';
	$scope.sortReverse = false;

});




