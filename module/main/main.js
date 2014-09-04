'use strict';

angular.module('myblog.main', [])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'module/main/main.html',
            controller: 'MainCtrl'
        });
    }])

    .controller('MainCtrl', ['$scope',function (scope) {
        scope.oneAtATime = true;

        scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }]);