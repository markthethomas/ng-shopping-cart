'use strict';

/**
 * @ngdoc service
 * @name ngShoppingCartApp.notifications
 * @description
 * # notifications
 * Factory in the ngShoppingCartApp.
 */
angular.module('ngShoppingCartApp')
  .factory('Notifications', function () {
    var notifications = [];

    function haveNotifications() {
      return notifications.length > 0;
    }

    function all() {
      return notifications;
    }

    function create(message, type) {
      notifications.push({
        message: message,
        type: type
      });
      setTimeout(function () {
        notifications.pop();
      }, 1000);
    }

    return {
      create: create,
      all: all,
      haveNotifications: haveNotifications
    };
  });
