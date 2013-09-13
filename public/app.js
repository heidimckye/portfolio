var HMcKye = angular.module('HMcKye', []);

HMcKye.config(function($routeProvider) {
  $routeProvider
	   .when('/', {
	     controller: 'HomeCtrl',
	     templateUrl: 'views/home.html'
	   })
	   .when('/about', {
	     controller: 'AboutCtrl',
	     templateUrl: 'views/about.html'
	   })
	   .when('/photography', {
	     controller: 'PhotographyCtrl',
	     templateUrl: 'views/photography.html'
	   })
	   .when('/writing', {
	     controller: 'WritingCtrl',
	     templateUrl: 'views/writing.html'
	   })
	   .when('/blog', {
	     controller: 'BlogCtrl',
	     templateUrl: 'views/blog.html'
	   })


	   .otherwise({ redirectTo: '/' });
})

HMcKye.controller('MainCtrl', function($scope,$location) {
    $scope.navClick = function(href){
    	console.log(href);
    	$location.url(href);
    }
});

HMcKye.controller('HomeCtrl', function($scope,$location) {

});

HMcKye.controller('AboutCtrl', function($scope,$location) {


});

HMcKye.controller('PhotographyCtrl', function($scope,$location) {
	
	$scope.images = [ { src       :'https://sites.google.com/site/hmckye/_/rsrc/1257614060061/IMG_1395-large.JPG'
					  , landscape : true }
					, { src       :'img/cali.JPG'
					  , landscape : true }
					, { src       : 'img/yaaaar.JPG'
					  , landscape : false }
					, { src       : 'img/cali_red.JPG'
					  , landscape : false }
					];
	$scope.carousel = function(index){
		$scope.mainImage = $scope.images[index];
	};
	$scope.carousel(0)
});

HMcKye.controller('WritingCtrl', function($scope,$location) {


});

HMcKye.controller('BlogCtrl', function($scope,$location) {


});