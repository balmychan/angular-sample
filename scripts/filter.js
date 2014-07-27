"use strict";

// 消費税計算フィルターを登録
angular.module("angular-sample")
  .filter("calcTax", function() {
    return function(value, taxRate) {
      if (!value) return "";
      if (!taxRate) taxRate = 1.08;
      return value * taxRate;
    }
  });

// 金額表示用フィルターを登録
angular.module("angular-sample")
  .filter("money", function() {
    return function(value) {
      if (!value) return "";

      var retValue = Math.floor(value); // 切り捨て
      retValue = String(retValue).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,' ); // 3桁区切りでカンマを追加
      retValue = "¥" + retValue; // 円マークを付ける
      return retValue;
    }
  });