(function(){	
angular.module('MyApp')
.service('Session', Session);

function Session(){
	var vm = this;

	vm.create = create;
	vm.destroy = destroy;

	return vm;

	function create(sessionId, userId, userRole){
		vm.sessionId = sessionId;
		vm.userId = userId;
		vm.userRole = userRole;
	}

	function destroy(){
		vm.sessionId = null;
		vm.userId = null;
		vm.userRole = null;
	}
}

})();