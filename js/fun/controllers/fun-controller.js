(function(){
	angular.module('FunApp')
	.controller('FunController', FunController);

	FunController.$inject = ['FunService'];

	function FunController(FunService){
		var vm = this;
		vm.movies = [];
		vm.promise = null;

		vm.search = "";
		vm.sortBy = "title";

		vm.categories = ["Action", "Sci-Fi"];

		vm.tagColor = tagColor;

		vm.promise = FunService.getMovies('movie.json').then(function(promise){
			vm.movies = promise.data;
		});

		function tagColor(tag){
			return FunService.getTagColor(tag);
		}
	}
})();