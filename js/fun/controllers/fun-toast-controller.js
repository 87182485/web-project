
(function(){
	angular.module('FunApp')
	.controller('FunDialogController', FunDialogController);

    FunToastController.$inject = ['$materialDialog'];

	function FunToastController($materialDialog){
		var vm = this;

		vm.makeDialog = makeDialog;
		vm.closeDialog = closeDialog;

		function makeDialog(ev,movie){
			$materialDialog.show({
				templateUrl: 'partials/fun/movie-detail.html',
				targetEvent: ev,
				controller: vm
			});
		}

		function closeDialog(){
			$materialDialog.hide();
		}
	}
})();