'use strict';

/* Controllers */

var activitiesControllers = angular.module('activitiesControllers', []);

activitiesControllers.controller('ActivitiesListCtrl', ['$scope', 'Activitie',
  function($scope, Activitie) {
    $scope.activities = Activitie.query();
    $scope.orderProp = 'requestDate';

    //comprueba que la actividad no tenga estado
    $scope.unset = function(obj){
      if(obj.approved == "")
        return true;
    };

    //comprueba que la actividad alla sido no aprobado
    $scope.notApproved = function(obj){
      if(obj.approved == "false")
        return true;
    };

    //comprueba que la actividad sea aprobada
    $scope.approved = function(obj){
      if(obj.approved == "true")
        return true;
    };

    //dada dos fechas devuelve el número de días de diferencia entre ellas
    $scope.dateSub = function(beginDate, endDate){
      var d1 = new Date(beginDate);
      var d2 = new Date(endDate);
      var miliseconds = d2-d1;
      var seconds = miliseconds/1000;
      var minutes = seconds/60;
      var hours = minutes/60;
      var days = hours/24;
      return days;
    }

    //acepta una actividad
    $scope.aceptar = function(activitie){
      activitie.approved = "true";
    }

    //rechaza una oportunidad
    $scope.rechazar = function(activitie){
      activitie.approved = "false";
    }

  }]);
