'use strict';

angular.module('projetMangaApp')
  .controller('ListCtrl', function ($scope, Mangas) {
    Mangas.loadMangas().success(function () {
  			 $scope.mangas=Mangas.getMangas();
  		})
  });
