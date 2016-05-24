/* global angular */

'use strict';

angular.module('InsertModule', ['chart.js'])
  .controller('InsertController', function ($scope, $http) {

  $scope.labels = ["Jasmin %", "Chris %"];
  $scope.data = [50,50];

  var executeFairnesCall = function(jasminValue,chrisValue,value) {
    var url = 'http://messe.cfapps.pez.pivotal.io/jasmin/' 
               + jasminValue 
               + '/chris/' 
               + chrisValue 
              + '/value/' 
               + value;

    $http.get(url).then(function(response) {
      var jasminContrib = response.data.jasminContrib
      var chrisContrib = response.data.chrisContrib
      var total = response.data.total

      $scope.insertMesseHistory({
        value: value,
        jasminValue: jasminValue,
        chrisValue: chrisValue,
        chrisContrib: chrisContrib,
        jasminContrib: jasminContrib,
        saved: false
      });
    });
  }

  $scope.calculateFairness = function() {
    var jasmin = $scope.jasmin;
    var chris = $scope.chris;
    var value = $scope.value;

    if (jasmin === undefined || jasmin === '') {
      console.log('Cannot call with no jasmin contrib');
      return 
    }

    if (chris === undefined || chris === '') {
      console.log('Cannot call with no chris contrib');
      return 
    }

    if (value === undefined || value === '') {
      console.log('Cannot call with no value');
      return 
    }

    executeFairnesCall($scope.jasmin, 
                       $scope.chris, 
                       $scope.value);
  };
})
.directive('messeInsert', function() {
  return {
    templateUrl: 'components/messe/insert/insert.html',
    controller: 'InsertController',
  };
});
