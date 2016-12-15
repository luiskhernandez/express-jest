var customMatchers = require('./helpers/custom_matchers/ready')

beforeEach(function () {
  jasmine.addMatchers(customMatchers)
})
