'use strict';

angular.module('projetMangaApp')
  .directive('likeManga', function ($log, $window) {
    return {
      template: '<span><a class="btn btn-lg btn-success" style="background:{{color}}" ng-click"likeManga()">Like</a></span>',
      replace: false,
      restrict: 'E',      
      scope:{
        color:'@',
      },
      link: function (scope, element, attrs) {

                element.click(function(){

                    scope.$apply(function(){
                        scope.color='green !important';
                        console.log('change color');
                   });

                });
      }
    };
  });
