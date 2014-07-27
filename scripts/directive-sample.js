"use strict";

// コントローラーを登録
angular.module("angular-sample")
  .controller("mainController", function($scope, $filter) {

    // 商品データ
    $scope.items = [
      { "name": "オロちゃんマウスパッド", "price" : 1000 },
      { "name": "オロちゃんトランプ", "price" : 5000 },
      { "name": "ハマー", "price" : 5000000 },
      { "name": "iPad", "price" : 49800 },
    ];
    
    // 合計金額の計算
    $scope.$watch("items", function() {
      var totalPrice = 0;
      angular.forEach($scope.items, function(item) {
        totalPrice += $filter("calcTax")(item.price * item.amount);
      });
      $scope.totalPrice = totalPrice;
    }, true);

  });
