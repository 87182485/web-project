(function(){
    'use strict';

	angular.module('MyApp').controller('LoginController', LoginController);

	LoginController.$inject = ['LoginService'];

	function LoginController(LoginService){
		var vm = this;
		vm.loginModel = {};

		vm.isBusy = false;
		vm.auth = false;

		vm.login = function(){
			vm.isBusy = true;
			vm.auth = false;

			LoginService.login(vm.loginModel.username, vm.loginModel.password).then(function(){
				console.log(vm.loginModel.username + " " + vm.loginModel.password);
				vm.auth = LoginService.auth;
			}, 
			function(){
				vm.auth = false;
			})
			['finally'](function(){
				vm.isBusy = false;
			});
		};
	}
})();