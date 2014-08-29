'use strict';

angular.module('likeApp')
  .directive('like', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the like directive');
      }
    };
  });
