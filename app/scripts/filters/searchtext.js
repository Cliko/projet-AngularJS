'use strict';

angular.module('projetMangaApp')
  .filter('searchText', function () {
                return function (input,statut) {
                    if(statut==1){
                        return input;
                    }else{
                        return 'Mrs ' + input;
                    }

                };
            });
