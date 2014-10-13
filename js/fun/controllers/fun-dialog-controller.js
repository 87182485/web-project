
(function(){
	angular.module('FunApp')
	.controller('FunDialogController', FunDialogController);

	FunDialogController.$inject = ['$materialDialog', '$rootScope'];

	function FunDialogController($materialDialog, $rootScope){
		var vm = this;

		vm.makeDialog = makeDialog;
		vm.closeDialog = closeDialog;

		function makeDialog(ev,movie){
			$rootScope.selectedMovie = movie;

			$materialDialog.show({
				templateUrl: 'partials/fun/movie-detail.html',
				targetEvent: ev,
				controller: 'FunDialogController',
				resolve: {
					selectedMovie : function(){
						return angular.copy(movie);
					}
				}
			});
		}

		function closeDialog(){
			$materialDialog.hide();
			$rootScope.selectedMovie = null;
		}
	}
})();