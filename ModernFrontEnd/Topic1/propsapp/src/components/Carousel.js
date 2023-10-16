import { convertTime } from "../helper/convertTime";

const forEmptyImg = "https://i.ytimg.com/vi/cBhIk9qXeGk/maxresdefault.jpg";

const company = ["NE alsan 1 manat", "Like ele like gor", "1 al 2 apar"];
const company2 = ["NE alsan 1 manat", "Like ele like gor", "1 al 2 apar"];

const personalJobTime = [12, 4, 5, 7];

export const Carousel = ({ isEmptyImg }) => {
  //   const isEmptyImg = false;

  let image =
    "https://dynamex.az/frontend/web/uploads//images/photo5330049797702401316.jpg";

  //   const image = isEmptyImg ? forEmptyImg : imgUrl;

  const resultTime = convertTime(personalJobTime);

  if (isEmptyImg) {
    image = forEmptyImg;
  }

  //   const result2 = personalJobTime.map((num) => num + 2);

  const list = company.map((item, index) => {
    // return <li key={`car-item-${index}`} >{item}</li>;
    return <li key={"com-item" + index}>{item}</li>;
  });

  const list2 = company2.map((item, index) => {
    // return <li key={`car-item-${index}`} >{item}</li>;
    return <li key={"com2-item" + index}>{item}</li>;
  });

  return (
    <div>
      <h2>Carousel</h2>
      <img src={image} />

      <ul>{list}</ul>

      <ul>{list2}</ul>
      <h2>Islediyi saatlar: {resultTime} </h2>
    </div>
  );
};

// const myObj = {
//   name: "Fullname",
//   age: 32,
// };

// const { name, age } = myObj;
// // console.log(myObj.age);
// // console.log(myObj["name"]);

// // console.log(name);

// function A({ name, age }) {
// //   const { name, age } = obj;

// }
