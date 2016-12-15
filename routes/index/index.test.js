var index = require('./index').index


describe('Routes', function () {

  it('includes Express', function () {
    var req, res, next;
    res = {}
    subject = res.render = jest.fn();
    index(req, res, next)
    expect(subject.mock.calls[0][0]).toBe('index')
    expect(subject.mock.calls[0][1].title).toBe('Express')

  })

  it('checks that value is ready', function () {
    expect({value: 'Ready'}).toBeReady()
  })
})
