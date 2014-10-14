var app = angular.module('MoneyApp', ['ngResource', 'ngTable']);

app.controller('MoneyCtrl', ['$scope', 'Expense', 'Roomate', 'Payment',
              function ($scope, Expense, Roomate, Payment) {
    $scope.Math = window.Math;
    Expense.query(function(data) {
      $scope.expenses = data;
    });

    Expense.by_roomate(function(data) {
      $scope.expenseByRoomate = data;
    });

    Roomate.query(function(data) {
      $scope.roomates = data;
    });

    Payment.query(function(data) {
      $scope.payments = data;
    });
}]);

app.factory('Expense', ['$resource', function ($resource) {
    return $resource('/api/expense', {},
      {by_roomate: {method: 'GET', url: '/api/expense/by_roomate'}});
}]);

app.factory('Roomate', ['$resource', function ($resource) {
    return $resource('/api/roomate');
}]);

app.factory('Payment', ['$resource', function ($resource) {
    return $resource('/api/payment');
}]);