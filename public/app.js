var app = angular.module('MedicalJournalApp', ['ui.router', 'ui.bootstrap'])

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'MainCtrl',
        templateUrl: 'views/home.html'
      })
      .state('profile', {
        url: '/profile',
        controller: 'ProfileCtrl',
        templateUrl: 'views/profile.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'views/404.html'
      })
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/404');
}])

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.state = '';

}
