'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
//  $routeProvider.otherwise({redirectTo: '/view1'});
    $routeProvider.when('/',{
      templateUrl:'views/base/img_slider.html'
    });
}]);

myApp.controller('navbar',function($scope){
  $scope.menus = [
    {
      ruta: '/ruta1',
      texto: 'M1'
    },
    {
      ruta: '/ruta2',
      texto: 'M2'
    },
    {
      ruta: '/ruta3',
      texto: 'M3'
    }
  ];
});

myApp.controller('footer',function($scope){
  $scope.Email = 'ventas@geckotronics.pe';
  $scope.Website = 'geckotronics.pe';
});