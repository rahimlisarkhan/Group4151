const personalCount = prompt("Nece nefer isciviz var?");

const employees = [];

function start() {
    
  for (let i = 0; i < personalCount; i++) {
    const fullname = prompt("Iscinin adi?");
    const age = prompt("Isci yasi?");
    const job = prompt("Vezifesi?");

    const myobj = {
      fullname,
      age,
      job,
    };

    employees.push(myobj);
  }

  show();
}

function show() {
  //   el.innerHtml = employees.map((personal) => `<li>${personal.fullname}| </li>`);
  console.log("employees", employees);
}

start();
