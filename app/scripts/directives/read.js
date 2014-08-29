'use strict';

angular.module('projetMangaApp')
  .directive('readManga', function () {
    return {
     template: '<span><a class="btn btn-lg btn-success" style="background:{{color}}" ng-click"readManga()">Read</a></span>',
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
