'use strict';

angular.module('projetMangaApp')
  .directive('noread', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the noread directive');
      }
    };
  });
