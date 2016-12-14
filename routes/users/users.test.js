var users = require('./users')
var app = require('../../app')

describe('User Routes', function () {
  describe('index', () => {
    it('returns a string', function () {
      var req, res, next
      res = {}
      var subject = res.send = jest.fn()
      users.index(req, res, next)
      expect(subject.mock.calls[0][0]).toBe('respond with a resource')
    })
  })
})
