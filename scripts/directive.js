"use strict";

// 消費税計算フィルターを登録
angular.module("angular-sample")
  .directive("tileItem", function() {
    return {
      "restrict" : "EA",
      "replace" : true,
      "scope" : {
        "item" : "="
      },
      "template" : '<div class="tile-item"><div class="item-name">{{item.name}}<span class="item-sub-price">（{{item.price | money}}）</span></div>数量：<input type="text" name="amount" ng-model="item.amount"><div id="total_price" ng-model="item.totalPrice">金額（税込）：{{item.amount * item.price | calcTax | money}}</div> <!-- calcTaxで消費税計算 --></div>'
    }
  });