'use strict';

angular.module('projetMangaApp')
  .controller('formCtrl', function ($scope,mangas) {
        mangas.loadMangas().success(function () {
            $scope.mangas=mangas.getMangas();
        });
        $scope.statut = {};
    });
