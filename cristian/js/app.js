
      //App
      //angular.module('app', ['ngRoute'])
angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

  	$stateProvider
      .state('home', {
          url: '/',
          views:
          {
            "topbar": {   templateUrl: 'views/topbar.html' },
            "content": {   templateUrl: 'views/main.html' },
          }
      })
      .state('time', {
          url: '/time',
          parent:'home',
          views:
          {
            "content@": {   templateUrl: 'views/time.html' },

          }
      })
      .state('map', {
          url: '/map',
          parent:'home',
          views:
          {
            "content@": {   templateUrl: 'views/map.html' },
          }
      });

});
