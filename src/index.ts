// https://en.wikipedia.org/wiki/Xorshift

const state = [1337];

const xorshift32 = (): number => {
  let x = state[0];
  x ^= (x << 13) ^ (x >> 17) ^ (x << 5);
  state[0] = x;
  return x;
};

console.log("xorshift32");

const NUMBERS_COUNT = 5;

for (let i = 0; i < NUMBERS_COUNT; i++) {
  console.log(xorshift32());
}

const xorshift64 = (): number => {
  let x = state[0];
  x ^= (x << 13) ^ (x >> 7) ^ (x << 17);
  return x;
};

console.log("\n");
console.log("xorshift64");

for (let i = 0; i < NUMBERS_COUNT; i++) {
  console.log(xorshift32());
}

const stateObj = { a: 1, b: 2, c: 3, d: 4 };

const xorshift128 = (): number => {
  let t = stateObj.d;
  const s = stateObj.a;

  stateObj.d = stateObj.c;
  stateObj.c = stateObj.b;
  stateObj.b = s;

  t ^= (t << 11) ^ (t >> 8);
  stateObj.a = t ^ s ^ (s >> 19);
  return stateObj.a;
};

console.log("\n");
console.log("xorshift128");

for (let i = 0; i < NUMBERS_COUNT; i++) {
  console.log(xorshift128());
}
