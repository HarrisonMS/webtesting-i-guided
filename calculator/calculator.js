module.exports = {
  add,
  sub,
  multiply
};


function add(...args) {
  const numbers = Array.isArray(args) ? args : Array.from(arguments)
  console.log('nums', numbers)
  return numbers.reduce((sum, number) => {
    return sum + number 
  }, 0)
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}
