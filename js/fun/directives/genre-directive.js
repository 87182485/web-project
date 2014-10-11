
(function(){
    'use strict';

	angular.module('FunApp')
	.directive('genreColor', genreColor);

	function genreColor(){
		return {
			restrict: 'EA',
			scope: true,
			require:'ngModel',
			controller: 'FunController',
			templateUrl: 'partials/fun/genres.html'
		}
	};
})();