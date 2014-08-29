'use strict';

angular.module('projetMangaApp')
  .service('Users', function ($http) {
    var users = [];

        // Public API here
        return {
                loadUsers: function(){
                    return $http.get('datas/users.json').success(function(data){
                        users=data;
                    })
                },
            getUsers: function () {
                return users;
            },
            addUser: function (user) {
                users.push(user);
            },
            updateUser: function (user) {
            },
            getUserById: function (userId) {
                for (var i = 0; i < users.length; i++) {
                    var user = users[i];
                    if(user.name===userId){
                        return user;
                    }
                }
               return {};
            }
        };
    });
