'use strict';

angular.module('projetMangaApp')
  .filter('id', function () {
    return function (input) {
      return 'id filter: ' + input;
    };
  });
