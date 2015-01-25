// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/chat', {
            templateUrl: 'views/Chat/chat.html',
            controller: 'ChatController'
        })
        .when('/recipe', {
            templateUrl: 'views/Recipe/recipe.html',
            controller: 'RecipeController'
        })
        
        .when('/recipe/new', {
            templateUrl: 'views/Recipe/recipenew.html',
            controller: 'RecipeController'
        });

    $locationProvider.html5Mode(true);

}]);
