'use strict';

/**
 * @ngdoc function
 * @name ngShoppingCartApp.controller:NotificationsCtrl
 * @description
 * # NotificationsCtrl
 * Controller of the ngShoppingCartApp
 */
angular.module('ngShoppingCartApp')
  .controller('NotificationsCtrl', function($scope, Notifications) {
    $scope.notifications = Notifications.all();
    $scope.showNotifications = true;
  });