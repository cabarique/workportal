'use strict';

/* Services */

var activitiesServices = angular.module('activitiesServices', ['ngResource']);

activitiesServices.factory('Activitie', ['$resource',
  function($resource){
    return $resource('activities/:activitieID.json', {}, {
      query: {method:'GET', params:{activitieID:'inbox'}, isArray:true}
    });
  }]);

