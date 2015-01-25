angular.module('ChatCtrl', []).controller('ChatController', function($scope,$firebase) {


var ref = new Firebase("https://luminous-heat-165.firebaseio.com/messages");
  var sync = $firebase(ref);
  // create a synchronized array for use in our HTML code
  $scope.messages = sync.$asArray();
	

	$scope.send  = function(message){
		$scope.messages.$add(message);
	};
});
