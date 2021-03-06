(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'mainDRPController',
        controllerAs: 'vm'
      }).when('/myaccount',{
      templateUrl: 'app/User/myAccount.html',
      controller: 'MyAccountController',
      controllerAs: 'vm'
    })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
