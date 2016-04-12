'use strict';

angular.module('companyApp.services', ['ngResource', 'ngRoute']).factory('CompanyService', function ($resource, $location) {

    var data = undefined;

    var res = $resource('http://localhost/v1/companies/:id',
        {id: "@id"},
        {
            'query': {method:'GET', isArray: true},
            'save': {method:'POST'},
            'update': {method:'PUT'}
        }
    );

    res.hasState = function() {
        return data !== undefined;
    };

    res.getState = function() {
        return data;
    };

    res.clearState = function() {
        data = undefined;
    };

    res.saveState = function(company) {
        data = company;
    };

    return res;

//    return {
//        resource: new r(),
//        hasState: hasState,
//        getState: getState,
//        clearState: clearState,
//        saveState: saveState
//    }
});
