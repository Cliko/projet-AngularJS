'use strict';

angular.module('projetMangaApp')
  .controller('liaisonCtrl', function ($scope,$routeParams,$location,liaisons) {
    	var mangaId=$routeParams.mangaId;
        $scope.test = mangaId;
        if(mangaId){
            liaisons.loadLiaison().success(function () {
                $scope.manga=mangas.getMangaById(mangaId);
            });
        }
  });
