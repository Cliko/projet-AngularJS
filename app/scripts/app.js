'use strict';

angular
  .module('projetMangaApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'listCtrl'
      })
      .when('/manga/:id', {
        templateUrl: 'views/manga.html',
        controller: 'mangaCtrl'
      })
      .when('/login/:username', {
        templateUrl: 'views/loginout.html',
        controller: 'loginoutCtrl '
      })
      .when('/logout/:username', {
        templateUrl: 'views/loginout.html',
        controller: 'loginoutCtrl'
      })
      .when('/search/:value', {
        templateUrl: 'views/search.html',
        controller: 'searchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
