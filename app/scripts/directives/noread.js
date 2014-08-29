'use strict';

angular.module('projetMangaApp')
  .directive('noreadManga', function () {
    return {
      template: '<noread-manga class="btn btn-lg btn-success">Like</noread-manga>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.noreadManga=function(){
        	$log.info('click noread');
        };
      }
    };
  });
