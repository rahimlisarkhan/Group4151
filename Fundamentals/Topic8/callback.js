// const arr = [1, 2, 34, 5, 66];

// const callback = (el) => {
//   return el * 3;
// };

// const newArr = arr.map(callback);

// console.log(newArr);

// function sum() {}

// function Result(par1, par2, par3) {
//   par1.name;
//   par2[1];

//   par3();
// }

// // Result(4,"hello")
// // Result(null,undefined)
// // Result(true, [4, 5, 6]);
// Result({ name: "John" }, [4, 5, 6], sum);

// function generatorIsiq(guc, benzin) {
//   return benzin - guc;
// }

// function generatorChina(guc, benzin) {
//   return benzin - guc;
// }

// function kombaynForFood(taxilNovu, aparat) {
//   const result = aparat(1000, 2000);

//   if (result < 0) {
//     console.log("Zehmet olmasa benzini artiq tokun yada gucu azaldin");
//   } else {
//     console.log("Ugurla " + taxilNovu + " yigildi!");
//   }
// }

// kombaynForFood("Bugda", generatorIsiq);
// kombaynForFood("Qargidali", generatorChina);

function isiqUstasi(olcunu) {
  const netice = olcunu * 4;

  return netice + "m kabel";
}

function suUstasi(olcunu) {
  const netice = olcunu * 2;

  return netice + "m boru";
}

function qapiUstasi(olcunu) {
  const netice = olcunu > 50 ? 2 : 1;

  return netice + "eded qapi";
}

function hesablayan(sahe, ustadinDediyi) {
  const result = ustadinDediyi(sahe);

  console.log(`Bu ${sahe}-li otaq ucun bize bu qeder ${result} lazimdir`);
}

// hesablayan(55, isiqUstasi);
// hesablayan(55, suUstasi);
// hesablayan(55, qapiUstasi);

let temperature = prompt(
  "What Temperature Do You Want To Convert? Select One F or C"
);
let degree = prompt(
  "What Degree Your Temperature (don't need to write F or C)"
);

console.log("temperature", temperature);

if (temperature.toLowerCase() == "f") {
  console.log("F....");

  let F = (degree * 9) / 5 + 32;
  alert(`Converted: ${F} F`);
} else if (temperature.toLowerCase() == "c") {
  console.log("C....");

  let C = ((degree - 32) * 5) / 9;
  alert(`Converted: ${C} C`);
} else {
  alert("Wrong information");
}
