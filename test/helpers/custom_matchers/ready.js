
var customMatchers = {
  toBeReady: function(utils, customEqualityTesters) {
    return {
      compare: function(actual, expected) {
        if (expected === undefined) {
          expected = ''
        }
        var results = {}
        results.pass = utils.equals(actual.value, 'Ready', customEqualityTesters)
        results.message = results.pass ? 'Success Message' : 'Error Message'
        return results
      }
    }
  }
}

module.exports = customMatchers
