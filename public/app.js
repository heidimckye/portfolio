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


});

HMcKye.controller('WritingCtrl', function($scope,$location) {


});

HMcKye.controller('BlogCtrl', function($scope,$location) {


});