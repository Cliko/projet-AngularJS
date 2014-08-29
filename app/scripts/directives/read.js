'use strict';

angular.module('likeApp')
  .directive('read', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the read directive');
      }
    };
  });
