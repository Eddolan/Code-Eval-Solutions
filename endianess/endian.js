var fs  = require("fs");
var os = require("os");
var returnVals = {
  false: 'BigEndian',
  true: 'LittleEndian'
}
var LE = ((new Uint32Array((new Uint8Array([1,2,3,4])).buffer))[0] === 0x04030201);
console.log(returnVals[LE])

