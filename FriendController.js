var app = angular.module('friendsList');

app.controller('FriendController', function($scope, $http) {

	$scope.friends = [];

	$scope.friends = $http.get('friend-data.json')
		.then(function(response) {
			$scope.friends = response.data;
		}, function(response) {
			console.log('error getting data');
		});

	$scope.sortUpDown = [
		{name: "Descending", value: true },
		{name: 'Ascending', value: false }
	];

	$scope.sortOptions = [
		{name: 'Name', value: 'name'},
		{name: '#Friends', value: 'friend_count'},
		{name: 'City', value: 'current_location.city'},
		{name: 'State', value: 'current_location.state'},
		{name: 'Country', value: 'current_location.country'}
	]

	$scope.sortType = 'name';
	$scope.sortReverse = false;

});




