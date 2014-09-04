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
        scope.blogs = blogs;
        scope.learns = learns;
        scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        scope.tabs = {};
        scope.addtab = function(title,folder){
            if(!scope.tabs[title])
                scope.tabs[title] = {'title':title , url:'module/'+folder+'/'+title+'.html'};
            scope.tabs[title].active = true;
        };
    }]);