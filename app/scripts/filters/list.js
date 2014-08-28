'use strict';

angular.module('projetMangaApp')
  .filter('list', function () {
    return function (input) {
      return 'list filter: ' + input;
    };
  });
