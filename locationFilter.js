angular.module('friendsList')
	.filter('byLocation', function() {
		return function(friends, location) {
			var items = {
				location: location,
				out: []
			};
			angular.forEach(this.current_location, function(value, key) {
				if (this.location[value.current_location] == true) {
					this.out.push(value);
				}
			}, items);

			return items.out;
		}
	});

