'use strict';

var app = angular.module('companyApp.newController', ['companyApp.services']);

app.controller('CompanyNewController', function($scope, $routeParams, $location, $uibModal, CompanyService) {
    console.log("CompanyNewController");

    console.log($routeParams.id);

    $scope.gotoCompanyListPage = function () {
        $location.path("/companies")
    };

    if(CompanyService.hasState()) {
        console.log("CompanyNewController.hasState");
        $scope.company = CompanyService.getState();
        CompanyService.clearState();
    } else if($routeParams.id !== undefined) {
        $scope.gotoCompanyListPage();
    }

    $scope.submit = function () {
        console.log("CompanyNewController.submit");

        CompanyService.save($scope.company, function (company) {
            console.log("CompanyNewController.submit success");
            CompanyService.clearState();
            $location.path('/companies');
        }, function(data) {
            console.log("CompanyNewController.submit error");
            console.log(data);
        });
    };

    $scope.update = function () {
        console.log("CompanyNewController.update");

        CompanyService.update({id: $routeParams.id}, $scope.company, function (company) {
            console.log("CompanyNewController.submit success");
            CompanyService.clearState();
            $location.path('/companies');
        }, function(data) {
            console.log("CompanyNewController.submit error");
            console.log(data);
        });
    };

    $scope.openModal = function (company) {
        var modalInstance = $uibModal.open({
            templateUrl: 'addBeneficialModal.html',
            controller: 'ModalInstanceCtrl'
        });

        modalInstance.result.then(function (beneficial) {
            if($scope.company === undefined) {
                $scope.company = {};
            }
            $scope.company.owners = $scope.company.owners || [];
            $scope.company.owners.push(beneficial);
        });
    };

    $scope.deleteBeneficial = function(beneficial) {
        var index = $scope.company.owners.indexOf(beneficial);
        $scope.company.owners.splice(index, 1);
    };
});

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

    $scope.ok = function () {
        $uibModalInstance.close($scope.beneficial);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
