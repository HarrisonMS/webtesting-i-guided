const { validate } = require('./users-service')

describe('user-service.js', () => {
  describe('validate', () => {
    it('should return false if no username or password', () => {
      expect(validate({})).toBe(false);
      expect(validate({username: 'sam'})).toBe(false);
      expect(validate({password: 'pass'})).toBe(false);
    })
    it('should return true if has username and password', () => {
      expect(validate({username: 'sam', password: 'pass'})).toBe(true);
    })
  })
})