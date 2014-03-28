module.exports = Class = function(argv, parent) {
  var constructor = argv["initialize"] || function() {};

  if (typeof parent === "function") {
    constructor.prototype = new parent();
    constructor.prototype.constructor = constructor;
    constructor.__super__ = parent;
  } else {
    constructor.__super__ = Object;
  }

  var current_class = constructor;
  constructor.prototype.super = function(fname) {
    current_class = current_class.__super__;
    result = current_class.prototype[fname].apply(this, Array.prototype.slice.apply(arguments, [1]));
    current_class = constructor;
    return result;
  }

  for (var key in argv) {
    if (key !== "initialize") {
      constructor.prototype[key] = argv[key];
    }
  }

  return constructor;
};
