'use strict';

/**
 * @ngdoc overview
 * @name profileviewerApp
 * @description
 * # profileviewerApp
 *
 * Main module of the application.
 */

angular
  .module('profileviewerApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'ngClipboard',
    'monospaced.qrcode'
  ])
  .config(function ($compileProvider, $locationProvider, $routeProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|tel|skype|mailto|callto|bitmsg|xmpp|bitcoin|namecoin|litecoin|dogecoin):/);

    $locationProvider.html5Mode(true).hashPrefix('!');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/:username', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
