'use strict';

angular.module('projetMangaApp')
  .controller('listCtrl', function ($scope, mangas) {
    mangas.loadMangas().success(function () {
  			 $scope.mangas=mangas.getMangas();
  		});
    $scope.test = mangas.getMangas();
  });
