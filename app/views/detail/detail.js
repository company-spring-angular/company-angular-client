'use strict';

angular.module('companyApp.detailController', ['companyApp.services']).controller('CompanyDetailController', function($scope, $routeParams, $location, CompanyService) {
    console.log("CompanyDetailController");

    var companyId = $routeParams.id;
    console.log("CompanyDetailController.companyID = " + companyId);
    $scope.company = CompanyService.get({id: companyId});

    $scope.gotoCompanyListPage = function () {
        console.log("CompanyDetailController.gotoCompanyListPage");
        $location.path("/companies")
    };

    $scope.gotoCompanyUpdatePage = function() {
        console.log("CompanyDetailController.gotoCompanyUpdatePage");
        CompanyService.saveState($scope.company);
        $location.path('/company/' + $scope.company.cid + '/update');
    };
});
