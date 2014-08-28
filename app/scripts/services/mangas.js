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
                for (var i = 0; i < mangas.length; i++) {
                    var manga = mangas[i];
                    if(manga.title===mangaId){
                        return user;
                    }
                }
                return {};
            }
        };
    });