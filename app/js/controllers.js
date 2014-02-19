'use strict';

/* Controllers */

var activitiesControllers = angular.module('activitiesControllers', []);

activitiesControllers.controller('ActivitiesListCtrl', ['$scope', 'Activitie',
  function($scope, Activitie) {
    $scope.activities = Activitie.query();
    $scope.orderProp = 'requestDate';
    $scope.unset = function(obj){
      if(obj.approved == "")
        return true;
    };

    $scope.notApproved = function(obj){
      if(obj.approved == "false")
        return true;
    };

    $scope.approved = function(obj){
      if(obj.approved != "" || obj.approved == "true")
        return true;
    };

  }]);
