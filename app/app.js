'use strict';

/* App Module */

var app = angular.module('companyApp', [
    'ui.bootstrap',
    'ngRoute',
    'ngTouch',
    'ngAnimate',
    'companyApp.detailController',
    'companyApp.newController',
    'companyApp.listController',
    'companyApp.services'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/companies', {
        templateUrl: 'views/list/list.html',
        controller: 'CompanyListController'
        }
    ).
    when('/company/new', {
        templateUrl:'views/new/new.html',
        controller: 'CompanyNewController'
        }
    ).
    when('/company/:id', {
        templateUrl: 'views/detail/detail.html',
        controller: 'CompanyDetailController'
        }
    ).
    when('/company/:id/update', {
        templateUrl: 'views/update/update.html',
        controller: 'CompanyNewController'
        }
    ).
    otherwise({
        redirectTo: '/companies'
    });
}]);
