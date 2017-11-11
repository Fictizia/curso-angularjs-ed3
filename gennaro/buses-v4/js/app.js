// App
angular.module('app', ['ui.router'])

	.config(['$stateProvider', '$urlRouterProvider', 
		function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/');
			
			$stateProvider
			.state('home', {
					url: "/",
					views:{
						"topbar":{templateUrl: "views/topbar.html"},
						"content":{templateUrl: "views/main.html"},
					}
				})
	});
