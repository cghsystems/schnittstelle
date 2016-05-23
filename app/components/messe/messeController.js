/* global angular */

'use strict';

angular.module('schnittstelleApp')
  .controller('MesseController', function ($scope, $http) {
})
.directive('messeView', function() {
  return {
    templateUrl: 'components/messe/messeView.html',
    controller: 'MesseController',
  };
});
