// BN2

const newarr = [];
const arr = [
  ["test1", "Test2"],
  ["a", "b"],
  ["I", "II", "III"],
  [99, 100],
];

const needIndexEl = "II";

// loop1: for (let i = 0; i < arr.length; i += 1) {
loop1: for (let i = 0; i < arr.length; i += 1) {
  const subArr = arr[i];

  // console.log(i);

  for (let k = 0; k < subArr.length; k += 1) {
    const el = subArr[k];

    // if (el.startsWith("T")) {
    // if (el.includes("a")) {
    if (el === needIndexEl) {
      console.log(i, k);

      continue;

      console.log("test9999");
      // break loop1;
      // break loop1;
      // return el
    }

    console.log(k);
  }
}

arr[2][1];
