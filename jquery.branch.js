(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.call(root);
  } else {
    root["mu-jquery-climb/jquery.branch"] = factory.call(root);
  }
})(["./branch"], this, function (branch) {
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
