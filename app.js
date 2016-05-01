angular.module('schedular', ['firebase'])

.controller('mainCtrl', function($scope, $firebase) {
	//connect to firebase 
	var ref = new Firebase("https://sweltering-fire-6981.firebaseio.com/days");
	var fb = $firebase(ref);

	//sync as object
	var syncObject = fb.$asObject();

	//three way data binding 
	syncObject.$bindTo($scope, 'days');

	//function to set the data 
	// $scope.reset = function () {
	// 	fb.$set ({
	// 		monday: {
	// 			name: "Monday",
	// 			slots: {
	// 				0900: {
	// 					time: "9:00am",
	// 					booked: false
	// 				},
	// 				0110: {
	// 					time: "0110am",
	// 					booked: false
	// 				}
	// 			}
	// 		},
	// 		tuesday: {
	// 			name: "Tuesday",
	// 			slots: {
	// 				0900: {
	// 					time: "9:00am",
	// 					booked: false
	// 				},
	// 				0110: {
	// 					time: "11:00am",
	// 					booked: false
	// 				}
	// 			}
	// 		}
	// 	});
	// };
});