'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ingredients', {templateUrl: 'partials/ingList.html', controller: 'MainIngCtrl'});
  $routeProvider.when('/ingredients/:ingredient', {templateUrl: 'partials/ingDetail.html', controller: 'DerIngCtrl'});
  $routeProvider.otherwise({redirectTo: '/ingredients'});
}]);
