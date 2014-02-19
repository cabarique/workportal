'use strict';

/* App Module */


var activitiesAPP = angular.module('activitiesApp', [
  'ngRoute',
  'phonecatAnimations',

  'activitiesControllers',
  // 'activitiesFilters',
  'activitiesServices'
]);

activitiesAPP.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/activities', {
        templateUrl: 'partials/activitie-list.html',
        controller: 'ActivitiesListCtrl'
      }).
      otherwise({
        redirectTo: '/activities'
      });
  }]);