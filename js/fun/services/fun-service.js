
(function(){
	angular.module('FunApp')
	.factory('FunService', FunService);

	FunService.$inject = ['$http', '$q'];

	function FunService($http, $q){
		var defer = $q.defer();

		var getMovies = getMovies;

		var getTagColor = getTagColor;

		var service = {
			getMovies : getMovies,
			getTagColor : getTagColor
		};

		return service;

		function getMovies(url){
			$http.get(url)
			.then(function(data){
				defer.resolve(data);
			},
			function(error){
				defer.reject(error);
			})

			return defer.promise;
		}

		function getTagColor(tag){
			if(angular.equals(tag, 'Action'))
			{
				return 'label-info';
			}else if(angular.equals(tag, 'Sci-Fi')){
				return 'label-success';
			}else if(angular.equals(tag, 'Horror')){
				return 'label-danger';
			}else{
				return 'label-warning';
			}
		}
	}
})();