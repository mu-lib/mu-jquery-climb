(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root["mu-jquery-climb/jquery.branch"] = factory();
  }
})(this, function () {
  return function (selector, root) {
    var me = this;
    var $ = me.constructor;
    return me
      .find(selector)
      .filter(function (index, element) {
        return $(element)
          .parentsUntil(root || me)
          .filter(selector)
          .length === 0;
      });
  }
});
