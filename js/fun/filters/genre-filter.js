
(function(){
	angular.module('FunApp')
	.filter('genre', genre);

	function genre(){
		return function(movies, genreName){

			if(angular.isArray(movies) && angular.isString(genreName))
			{
				var genres = ['All'];

				angular.forEach(movies, function(movie, key){
					if(angular.isArray(movie.genre)){
						angular.forEach(movie.genre, function(g, key){
							var val = g;
							if(genres.indexOf(val)==-1){
								genres.push(val);
							}
						});
					}
				});

				return genres;
			}else{
				return movies;
			}
	}
}
})();