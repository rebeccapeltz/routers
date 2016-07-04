//require('../app/js/client');
const angular = require('angular');

require('angular-mocks');
require(__dirname + '/../app/js/client.js');
// let ListController;
// let $httpBackend;
describe('crud app tests', () => {
  beforeEach(() => {
    angular.mock.module('crudApp');
    // angular.mock.inject(function($controller, _$httpBackend_) {
    //   ListController = new $controller('ListController');
    //   $httpBackend = _$httpBackend_;
    // });
  });

  it('should map routes to controllers', function() {
    angular.module('crudApp');

    angular.mock.inject(function($route) {

      expect($route.routes['/list'].controller).toBe('ListController');
      expect($route.routes['/list'].templateUrl).
      toEqual('/templates/partials/ListView.html');


      // otherwise redirect to
      expect($route.routes[null].redirectTo).toEqual('/');
    });
  });
});
