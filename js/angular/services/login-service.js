
(function(){
	angular
	.module('MyApp')
	.factory('LoginService', LoginService);

	LoginService.$inject = ['$q', '$timeout'];

	function LoginService($q, $timeout){
		var deferred = $q.defer();

		var login = login;
		var auth;

		function login(username, password){

            $timeout(function(){
            if(username==='gary'&& password==='123456'){
				auth = true;
			}else{
				deferred.reject('Wrong!');
				auth = false;
				return;
			}

			deferred.resolve(username);
            }, 2000)

			return deferred.promise;
		}

		return {
			login:login,
			auth:auth
		}
	}
})();