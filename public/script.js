var app = angular.module("testApp", ["ui.router"]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);


  $stateProvider
    .state('testState', {
      url: '/testState',
      templateUrl: 'item/item.html',
       controller: 'ItemCtrl'
    });

}]);
