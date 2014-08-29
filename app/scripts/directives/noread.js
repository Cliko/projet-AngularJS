'use strict';

angular.module('projetMangaApp')
  .directive('noreadManga', function () {
    return {
      template: '<span><a class="btn btn-lg btn-success" style="background:{{color}}" ng-click"noreadManga()">No read</a></span>',
      replace: false,
      restrict: 'E',      
      scope:{
        color:'@',
      },
      link: function (scope, element, attrs) {

                element.click(function(){

                    scope.$apply(function(){
                        scope.color='red !important';
                        console.log('change color');
                   });

                });
      }
    };
  });
