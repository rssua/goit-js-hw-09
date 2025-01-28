let dd = '1er';
let gg = ['www', 577, true, dd];
console.log(gg);
let jst = JSON.stringify(gg);

console.log(jst);

console.log(...gg);
let cc = { ...gg };
console.log(cc);
let yy = { ff: 'fdg5', sds: 77 };
console.dir(yy);
console.log(yy);

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
  const body = localStorage.getItem(key);
  try {
    const data = JSON.parse(body);
    return data;
  } catch {
    return body;
  }
}
