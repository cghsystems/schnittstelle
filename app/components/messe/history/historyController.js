/* global angular */

'use strict';

angular.module('HistoryModule', [])
  .controller('MesseHistoryController', function ($scope, $http) {

  $scope.messeCache = [];

  $scope.messeHistory = function() {
    return $scope.messeCache;
  };  
  
  $scope.historyIsEmpty = function() {
    return $scope.messeHistory().length === 0;
  };
 
  $scope.insertMesseHistory = function(messe) {
    var cache = $scope.messeCache;
    if (!contains(cache, messe)) {
      cache.push(messe);
    } 
  };

  var contains = function(cache, messe) {
    for(var x = 0; x < cache.length; x++) {
      if (angular.equals(cache[x], messe)) {
        return true 
      }
    } 
    return false;
  }
})
.directive('messeHistory', function() {
  return {
    templateUrl: 'components/messe/history/history.html',
    controller: 'MesseHistoryController',
  };
})
