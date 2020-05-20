const { add, sub, multiply } = require('./calculator.js');

// test away!
describe('calculator.js', () => {

  it('should run tests without errors', () => {
    
    expect(true).toBeTruthy();
  })

  describe('.add()', () => {
    it('should add two numbers', () => {
      expect(add(1,2)).toBe(3)
      expect(add(9,2)).toBe(11)
      expect(add(100,2)).toBe(102)
    })
    it('should return 0 when called with no arguments', () => {
      expect(add()).toBe(0)
    })
    it('should return number when called with a single number', () => {
      expect(add(1)).toBe(1)
    })
    it('should sum a list of numbers seperated by comma', () => {
      expect(add(1, 2, -5)).toBe(-2)
      expect(add(1, 2, 3)).toBe(6)
    })
    it('should support array of numbers', () => {
      expect(add(1, 2, 3)).toBe(6)
    })


  })
  describe('.sub()', () => {
    it('should subtract two numbers', () => {
      const dif = sub(3,1)
      expect(dif).toBe(2) 
      expect(sub(5,2)).toBe(3)
      expect(sub(24,12)).toBe(12)
    })
  })
  describe('.multiply()', () => {
    it('should multiply two numbers', () => {
      const product = multiply(3,3)
      expect(product).toBe(9)
    })
  })
  
})