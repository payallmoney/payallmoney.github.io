'use strict';

// Declare app level module which depends on views, and components
angular.module('myblog', [
  'ngRoute',
  'ui.bootstrap',
  'myblog.main',
  'myblog.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/main'});
}]);
