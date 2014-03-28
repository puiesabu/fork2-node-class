module.exports = Class = function(argv) {
  var constructor = argv["initialize"] || function() {};
  for (var key in argv) {
    if (key !== "initialize") {
      constructor.prototype[key] = argv[key];
    }
  }
  return constructor;
};
