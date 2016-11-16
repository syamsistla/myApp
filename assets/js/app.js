var app = angular.module('myApp', ['ngRoute','ui.bootstrap']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'app/View/loginView.html',
			controller: 'loginCtrl'
		})
		.when('/registration', {
			templateUrl: 'app/View/registrationView.html',
			controller: ''
		})
        .when('/landing', {
            templateUrl: 'app/View/landing.html',
            controller: 'landingCtrl'
        })
        .when('/dashboard',{
            templateUrl: 'app/View/dashboard.html',
			controller: 'dashboardCtrl'
        })
	    .when('/detailsPage',{
            templateUrl: 'app/View/contactDetails.html',
			controller: 'dashboardCtrl'
        })
		.otherwise({
			redirectTo: '/landing'
		});
});