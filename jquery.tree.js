(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./jquery.branch"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./jquery.branch"));
  } else {
    root["mu-jquery-climb/jquery.tree"] = factory(root["mu-jquery-climb/jquery.branch"]);
  }
})(this, function (branch) {
  function climb(selector, root, callback, depth) {
    var me = this;
    var $ = me.constructor;
    return branch.call(me, selector, root).map(function (index, element) {
      var $element = $(element);
      return climb.call(callback ? callback.call(me, index, $element, depth) || $element : $element, selector, element, callback, depth + 1)
        .add(element)
        .get();
    });
  }

  return function (selector, callback) {
    return climb.call(this, selector, null, callback, 0);
  }
});
