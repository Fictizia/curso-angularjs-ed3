// App

angular.module('app', ['ui.router'])

	.config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/')

		$stateProvider
		.state('base', {
			abstract: true,
			views: {
				"topbar": {
					templateUrl: 'views/topbar.html'
				},
				"footer": {
					templateUrl: 'views/footer.html'
				}
			}
		})
		.state('home', {
			parent: "base",
			url: '/',
			views: {
				"content@": {		
					templateUrl: 'views/main.html'
				}
			}			
		})
		.state('arrival-time', {
			parent: "base",
			url: '/arrival-time',
			views: {
				"content@": {				
					templateUrl: 'views/arrival-time.html'
				}
			}			
		});
	});

