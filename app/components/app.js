'use strict';

angular
  .module('schnittstelleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/messe', {
        controller: 'MesseController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
