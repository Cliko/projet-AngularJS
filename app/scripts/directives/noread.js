'use strict';

angular.module('projetMangaApp')
  .directive('noreadManga', function () {
    return {
      template: '<noread-manga><span class="btn btn-lg btn-success">No read</span></noread-manga>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.noreadManga=function(){
        	$log.info('click noread');
        };
      }
    };
  });
