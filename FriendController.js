var app = angular.module('friendsList');

app.controller('FriendController', function($scope, $http) {

	$scope.friends = [];

	$scope.friends = $http.get('friend-data.json')
		.then(function(response) {
			console.log(response);
			$scope.friends = response.data;
		}, function(response) {
			console.log('error getting data')
		});

	$scope.sortType = 'name';
	$scope.sortReverse = false;

});




