'use strict';

angular.module('projetMangaApp')
  .controller('mangaCtrl', function ($scope,$routeParams,$location,mangas) {
    	var mangaId=$routeParams.mangaId;
        $scope.test = mangaId;
        if(mangaId){
            $scope.manga=mangas.getMangaById(mangaId);
        }
  });
