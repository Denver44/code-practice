(function () {
  var warehouseCount = 500; // sealed inside this function now

  window.reserveUnits = function (amount) {
    warehouseCount -= amount;
    return warehouseCount;
  };
})();
