'use script';

function decode(str) {
  const cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };

  let decodeLetter = cipher[str.charAt(0)];
  return str.charAt(decodeLetter);
}

const decodeRes = decode('cycle');
console.log(decpdeRes);
