  /**
     * test function
     * @param {string} desc
     * @param {function} fn
    */
   const assert = require('chai').assert;
   const app = require('../index');
   
   function it(desc, fn) {
    try {
        fn();
        console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
    } catch (error) {
        console.log('\n');
        console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
        console.error(error);
    }
}

function assert(isTrue) {
if (!isTrue) {
  throw new Error();
}
}

it("testing that array length is equal to 10", function(){
  assert(fillArray(data,10).length == 10);
})

it("testing that the array contents are numbers", function(){
var arrOfItem = fillArray(data,10)
assert(!isNaN(arrOfItem[0]));
assert(!isNaN(arrOfItem[1]));
assert(!isNaN(arrOfItem[2]));
assert(!isNaN(arrOfItem[3]));
assert(!isNaN(arrOfItem[4]));
assert(!isNaN(arrOfItem[5]));
assert(!isNaN(arrOfItem[6]));
assert(!isNaN(arrOfItem[7]));
assert(!isNaN(arrOfItem[8]));
assert(!isNaN(arrOfItem[9]));
})