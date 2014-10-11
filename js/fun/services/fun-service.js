angular.module('FunApp')
.factory('FunService', FunService);

FunService.$inject = ['$http', '$q'];

function FunService($http, $q){
	var defer = $q.defer();

	var getMovies = getMovies;

	var getTagColor = getTagColor;

	return ({
		getMovies : getMovies,
		getTagColor : getTagColor
	})

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
			return 'btn-info';
		}else if(angular.equals(tag, 'Sci-Fi')){
			return 'btn-success';
		}else if(angular.equals(tag, 'Horror')){
			return 'btn-danger';
		}else{
			return 'btn-warning';
		}
	}
}