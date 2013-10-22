'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('MainIngCtrl', ['$scope', '$http', 
  	function MainIngCtrl($scope, $http) {
  	$http.get('ingredients/ingredients.json').success(function(data){
  		$scope.ing = data;
  	});
  }])

  .controller('DerIngCtrl', ['$scope', '$routeParams', '$http',
  	function($scope, $routeParams, $http) {
			$http.get('ingredients/' + $routeParams.ingredient + '.json').success(function(data) {
  			$scope.ing = data;
  		});
  }]);