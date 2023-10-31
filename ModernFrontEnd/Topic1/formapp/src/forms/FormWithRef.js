import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const handleSubmit = () => {
    let value = inputRef.current.value;
    console.log("value", value);

    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>React Form</h1>
      <div className="container">
        <div className="d-flex flex-column gap-5">
          <input ref={inputRef} className="form-control form-control-lg" />

          <button className="btn btn-danger" onClick={handleSubmit}>
            Send
          </button>

          <button onClick={() => inputRef.current.focus()}>Focus</button>
          <button onClick={() => inputRef.current.blur()}>Blur</button>
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
