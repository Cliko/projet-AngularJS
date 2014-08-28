'use strict';

describe('Service: Mangas', function () {

  // load the service's module
  beforeEach(module('projetMangaApp'));

  // instantiate service
  var Mangas;
  beforeEach(inject(function (_Mangas_) {
    Mangas = _Mangas_;
  }));

  it('should do something', function () {
    expect(!!Mangas).toBe(true);
  });

});
