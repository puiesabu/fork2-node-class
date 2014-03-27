module.exports = Class = (argv) ->
  constructor = undefined
  if typeof argv["initialize"] is "undefined"
    constructor = ->
  else
    constructor = argv["initialize"]
    for key of argv
      constructor::[key] = argv[key]  if key isnt "initialize"
  constructor
