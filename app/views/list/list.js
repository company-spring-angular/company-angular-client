'use strict';

angular.module('companyApp.listController', ['companyApp.services']).controller('CompanyListController', function($scope, $location, CompanyService) {
    console.log("CompanyListController");

    $scope.companies = CompanyService.query();

    $scope.gotoCompanyNewPage = function () {
        console.log("CompanyListController.gotoCompanyNewPage");
        $location.path("/company/new");
    };

    $scope.showCompany = function(id) {
        console.log(id);
        $location.path("/company/" + id);
    };

    $scope.gotoCompanyUpdatePage = function(company) {
        console.log("CompanyDetailController.gotoCompanyUpdatePage");
        CompanyService.saveState(company);
        $location.path('/company/' + company.cid + '/update');
    };
});