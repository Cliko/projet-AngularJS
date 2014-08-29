'use strict';

angular.module('projetMangaApp')
  .directive('dislikeManga', function () {
    return {
      template: '<dislike-manga class="btn btn-lg btn-success">Dislike</dislike-manga>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.dislikeManga=function(){
        	$log.info('click dislike');
        };
      }
    };
  });
