var app = angular.module('friendsList');

app.controller('FriendController', function($scope, $http) {

	$scope.friends = [];

	$http({
		method: 'GET',
		url: 'friend-data.json'
	})
	.success(function(data) {
		$scope.friends = data;
	});

});




