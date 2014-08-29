'use strict';

angular.module('projetMangaApp')
  .directive('likeManga', function ($log, $window) {
    return {
      template: '<like-manga class="btn btn-lg btn-success">Like</like-manga>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.likeManga=function(){
        	$log.info('click like');
        };
      }
    };
  });
