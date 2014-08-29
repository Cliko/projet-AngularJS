'use strict';

angular.module('projetMangaApp')
  .directive('readManga', function () {
    return {
     template: '<read-manga><span class="btn btn-lg btn-success">Read</span></read-manga>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.readManga=function(){
        	$log.info('click read');
        };
      }
    };
  });
