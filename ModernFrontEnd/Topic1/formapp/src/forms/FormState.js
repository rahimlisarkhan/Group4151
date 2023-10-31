import { useState } from "react";

function App() {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // const form = {
    //   fullname: fullname,
    //   password: password,
    // };

    const form = {
      fullname,
      password,
    };

    console.log(form);
    setFullname("");
    setPassword("");
  };

  const disableBtn = !password?.trim() || !fullname?.trim();

  const lowPassword = password.length <= 8;

  return (
    <div className="App">
      <h1>React Form</h1>
      <div className="container">
        <div className="d-flex flex-column gap-5">
          <input
            className="form-control form-control-lg"
            value={fullname}
            name="fullname"
            onChange={(e) => setFullname(e.target.value)}
          />
          <div>
            <input
              className="form-control form-control-lg"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
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
