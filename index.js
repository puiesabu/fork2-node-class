module.exports = Class = function(argv, parent) {
  var constructor = argv["initialize"] || function() {};

  if (typeof parent === "function") {
    constructor.prototype = new parent();
    constructor.prototype.constructor = constructor;
  }

  for (var key in argv) {
    if (key !== "initialize") {
      constructor.prototype[key] = argv[key];
    }
  }

  return constructor;
};
