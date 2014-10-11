
(function(){
	angular.module('FunApp')
	.directive('stars', stars);

	function stars(){
		restrict: 'EA',
		scope: {
			model:'=ngModel'
		},
		replace: true,
		require: 'ngModel',
		template: '<input id="input-5a" type="number" class="rating" value="{{movie.rating}}">{{movie.rating}}'
	}
})();