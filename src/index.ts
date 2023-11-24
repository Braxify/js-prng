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
