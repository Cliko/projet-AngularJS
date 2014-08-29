'use strict';

angular.module('projetMangaApp')
  .controller('mangaCtrl', function ($scope,$routeParams,$location,mangas) {
    	var mangaId=$routeParams.mangaId;
        $scope.test = mangaId;
        if(mangaId){
            mangas.loadMangas().success(function () {
                $scope.manga=mangas.getMangaById(mangaId);
            });
        }
  });
