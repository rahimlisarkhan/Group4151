import { useState } from "react";

const initialForm = {
  fullname: "",
  password: "",
};

function App() {
  const [form, setForm] = useState(initialForm);

  // const [count, setCount] = useState(0);

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // const isGoren = (prevForm) => ( { ...prevForm, [name]: value } )
    const isGoren = (prevForm) => {
      const newForm = { ...prevForm, [name]: value };

      return newForm;
    };

    setForm(isGoren);

    // setCount(count + 1)
    // setCount((prevCount) => prevCount + 1);
  };

  const handleSubmit = () => {
    console.log(form);

    setForm(initialForm);
  };

  const disableBtn = !form.password?.trim() || !form.fullname?.trim();

  const lowPassword = form.password.length <= 8;

  return (
    <div className="App">
      <h1>React Form</h1>
      <div className="container">
        <div className="d-flex flex-column gap-5">
          <input
            className="form-control form-control-lg"
            value={form.fullname}
            name="fullname"
            onChange={handleFormChange}
          />
          <div>
            <input
              className="form-control form-control-lg"
              value={form.password}
              name="password"
              onChange={handleFormChange}
            />
            <span
              className={`text-${lowPassword ? "danger" : "success"} h6 mt-2`}
            >
              {lowPassword ? "Zeifdir" : "Guclu"}
            </span>
          </div>

          <button
            className="btn btn-danger"
            onClick={handleSubmit}
            disabled={disableBtn}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

// const props = {

//   showText: () => {
//     console.log("text...");
//   },
// };

// const myObj = {
//   name:"Ramal"
// }

// myObj.age=34

//? myObj["positon"]="Developer"

// const myObj = {
//   name:"Test"
// }

// myObj.age="34"
