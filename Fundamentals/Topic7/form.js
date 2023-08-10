const formPerson = document.querySelector("#personal");
const personalList = document.querySelector("#personalList");

const userInfo = document.querySelector("#userInfo");

console.log(userInfo.dataset);

// formPerson.age.value

const people = [];

formPerson.addEventListener("submit", function (e) {
  e.preventDefault();

  const img_url = this.img_url.value;
  const name = this.name.value;
  const age = this.age.value;
  const salary = this.salary.value;

  //   const person = {
  //     personName: name,
  //     personAge: age,
  //     personSalary: salary,
  //   };

  const person = {
    name,
    age,
    salary,
    img_url,
  };

  people.push(person);

  console.log(people);

  const content = people
    .map(
      (personObj, index) => `
  <div class="card" style="width: 16rem" data-id="${index}">
  <img src="${personObj.img_url}" class="card-img-top" alt="${personObj.name}" />
  <div class="card-body">
    <p class="card-title">
        ${personObj.name}
    </p>
    <p class="card-text">
    ${personObj.age}
    </p>
    <p class="card-text">
    ${personObj.salary}
    </p>
  </div>
</div>
  `
    )
    .join("");

  personalList.innerHTML = content;
});

console.log(formPerson);

const myEl = EA.elTut("#demo");

console.log(myEl);
