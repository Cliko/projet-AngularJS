'use strict';

describe('Controller: LoginoutCtrl', function () {

  // load the controller's module
  beforeEach(module('projetMangaApp'));

  var LoginoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginoutCtrl = $controller('LoginoutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
