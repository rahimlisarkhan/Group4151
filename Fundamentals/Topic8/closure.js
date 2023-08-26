const SuSaygaci = () => {
  let count = 0;

  return function (num) {
    count += 1;

    return count;
  };
};

const jeyhunSSaygaci = SuSaygaci();

const izzetSSaygaci = SuSaygaci();
const gunelSSaygaci = SuSaygaci();

jeyhunSSaygaci();
jeyhunSSaygaci();
jeyhunSSaygaci();
jeyhunSSaygaci();
let result = jeyhunSSaygaci();

console.log("result", result);

izzetSSaygaci();
izzetSSaygaci();
izzetSSaygaci();
izzetSSaygaci();
izzetSSaygaci();
izzetSSaygaci();
let result2 = izzetSSaygaci(4);

console.log("result", result2);

gunelSSaygaci();
gunelSSaygaci();
gunelSSaygaci();
gunelSSaygaci();
gunelSSaygaci();
gunelSSaygaci();
let result3 = gunelSSaygaci(4);

console.log("result", result3);
