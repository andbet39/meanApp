angular.module('RecipeSrv', []).factory('RecipeService', function($resource) {
   return $resource("/api/recipes/:id");
});