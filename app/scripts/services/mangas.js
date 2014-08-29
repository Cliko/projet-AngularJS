'use strict';

angular.module('projetMangaApp')
    .factory('mangas', function ($http) {
        // Service logic
        // ...

        var mangas = [];

        // Public API here
        return {
            loadMangas:function(){
                return $http.get('scripts/datas/data.json').success(function(data){
                    mangas=data;
                })
            },
            getMangas: function () {
                return mangas;
            },
            getMangaById: function (mangaId) {
                for (var l = 0; l < mangas.length; l++) {
                    var manga = mangas[l];
                    if(manga.i===mangaId){
                        return manga;
                    }
                }
                return {};
            }
        };
    });