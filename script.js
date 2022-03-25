const arr = [
  [1, 2, "kia"],
  [1, 3, "audi"],
  [1, 4, "ford"],
  [2, 1, "lambo"],
  [2, 6, "Mazda"],
];

const res = arr.reduce((acc, val) => {
  const obj = {};
  obj[val[1]] = val[2];
  val[0] in acc ? (acc[val[0]][val[1]] = val[2]) : (acc[val[0]] = obj);
  return acc;
}, {});

console.log(res);
