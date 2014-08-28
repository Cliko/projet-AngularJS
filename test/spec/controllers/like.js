'use strict';

describe('Controller: LikeCtrl', function () {

  // load the controller's module
  beforeEach(module('projetMangaApp'));

  var LikeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LikeCtrl = $controller('LikeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
