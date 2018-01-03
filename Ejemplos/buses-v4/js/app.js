
var lang = {
	buses: {
		es: 'autobuses',
		en: 'stops'
	}
}

// App
angular.module('app', ['ui.router', 'firebase'])

	.config(function($stateProvider) {


			// Get browser lang and set this var
			var currentLang = 'en';
		
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/main.html'
			})
			.state('arrival-time-p', {
				url: '/'+lang.buses[currentLang],
				templateUrl: 'views/arrival-time.html'
			})
			.state('arrival-time', {
				url: '/arrival-time',
				templateUrl: 'views/arrival-time.html'
			})
			.state('map', {
				url: '/map',
				templateUrl: 'views/map.html'
			});

	});
