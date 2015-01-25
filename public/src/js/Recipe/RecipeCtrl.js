angular.module('RecipeCtrl', []).controller('RecipeController', function($scope,RecipeService) {

	$scope.title = "Prova della pagina recipe";
	
	$scope.tagline = 'To the moon and back!';   


	RecipeService.query(function(data) {
		$scope.recipes = data;
	});

	$scope.save = function(recipe){
		RecipeService.save(recipe);
		$scope.recipes.push(recipe);
	};

	$scope.delete  = function(recipe){
		var id = $scope.recipes[recipe]._id;
		RecipeService.delete({id: id});
		$scope.recipes.splice(recipe,1);
	};
});
