angular.module('friendsList', ['locationFilter'])
	.filter('byLocation', function() {
		return function(friends, location) {
			var items = {
				location: current_location,
				out: []
			};
			angular.forEach(friends, function(value, key) {
				if (this.location[value.current_location] === true) {
					this.out.push(value);
				}
			}, items);

			return items.out;
		}
	});

