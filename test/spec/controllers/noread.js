'use strict';

describe('Controller: NoreadCtrl', function () {

  // load the controller's module
  beforeEach(module('projetMangaApp'));

  var NoreadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoreadCtrl = $controller('NoreadCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
