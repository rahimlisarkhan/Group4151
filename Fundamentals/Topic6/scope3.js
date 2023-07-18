function MyOther() {
  function Sum() {
    const num = A;

    // return 4 + num; //NAN
    return 4 + num(); //9
  }

  function A() {
    return 5;
  }

  // return Sum;
  return Sum();
}

const myResult = MyOther;

const mySum = myResult();

// console.log(mySum());
console.log(mySum);
