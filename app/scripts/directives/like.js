'use strict';

angular.module('projetMangaApp')
  .directive('like', function ($log, $window) {
    return {
      template: '<div>test</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.likeManga=function(){
        	$log.info('click like');
        };
      }
    };
  });
