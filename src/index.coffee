module.exports = Class = (argv) ->
  constructor = undefined
  if typeof argv["initialize"] is "undefined"
    constructor = ->
  else
    constructor = argv["initialize"]
  constructor
