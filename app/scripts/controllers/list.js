'use strict';

angular.module('projetMangaApp')
  .controller('listCtrl', function ($scope, mangas) {
    Mangas.loadMangas().success(function () {
  			 $scope.mangas=mangas.getMangas();
  		});
  });
