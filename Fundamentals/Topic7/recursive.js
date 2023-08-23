// function countDown(number) {
//   console.log("number", number);

//   const newNumber = number - 1;

//   if (newNumber > 0) {
//     countDown(newNumber);
//   }
// }

// countDown(4);

// function edediSilsile(n) {
//   const newNum = n + 3;

//   let total = 0;

//   console.log("total", total);

//   if (newNum < 100) {
//     total += newNum;
//     edediSilsile(newNum);
//   } else {
//     return total;
//   }
// }

// const result = edediSilsile(1);

// console.log("result", result);

// function sum(n) {
//   if (n < 1) return 0;

//   return n + sum(n - 1); //;
// }

// console.log(sum(3)); //3 + 2 + 1 + 0

var array = [
  {
    id: 1,
    label: "Satisfied customers",
    children: [
      {
        id: 2,
        label: "Good food",
        icon: "restaurant_menu",
        children: [
          { id: 3, label: "Quality ingredients" },
          { id: 4, label: "Good recipe" },
        ],
      },
      {
        id: 5,
        label: "Good service",
        icon: "room_service",
        children: [
          { id: 6, label: "Prompt attention" },
          { id: 7, label: "Professional waiter" },
        ],
      },
      {
        id: 8,
        label: "Pleasant surroundings",
        icon: "photo",
        children: [
          {
            id: 9,
            label: "Happy atmosphere (not tickable)",
            tickable: false,
            children: [
              {
                id: 45,
                label: "Mestaga1",
              },
              {
                id: 23,
                label: "Hovsan",
              },
            ],
          },
          {
            id: 10,
            label: "Good table presentation (disabled node)",
            disabled: true,
          },
          {
            id: 11,
            label: "Pleasing decor",
          },
        ],
      },
      {
        id: 12,
        label: "Extra information (has no tick)",
        noTick: true,
        icon: "photo",
      },
      {
        id: 13,
        label: 'Forced tick strategy (to "strict" in this case)',
        tickStrategy: "strict",
        icon: "school",
        children: [
          {
            id: 14,
            label: "Happy atmosphere",
          },
          {
            id: 15,
            label: "Good table presentation",
          },
          {
            id: 16,
            label: "Very pleasing decor",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    label: "Satisfied customers",
    children: null,
  },
];

const renderTreeElements = (data) => {
  return `<div style="margin-left:40px">
    <div>${data.label}</div>
    <div>${
      data.children ? data.children.map(renderTreeElements).join(" ") : ""
      //   data.children?.map(renderTreeElements).join(" ")
    }</div>
    </div>
    `;

  //
};

const result = array.map((nodeEl) => renderTreeElements(nodeEl)).join(" ");

console.log(result);

document.querySelector("#demo").innerHTML = result;

//? ------
const a = ["dasdsa", "dasdasdsa", "dasdadasdsa"];

const currentWord = "dasdsa";

const currentGues = currentWord.split("").map((item) => "_"); // ["_","_"]

function start(e) {
  const userLetter = e.key;

  const indexGues = currentWord.indexOf(userLetter);
  if (indexGues !== -1) {
    currentGues[indexGues] = userLetter;

    render(currentGues);
  }
}

window.onkeydown = start;

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i));
  // setTimeout(()=>console.log(i),1000)
  // setTimeout(()=>console.log(i),1000)
}
