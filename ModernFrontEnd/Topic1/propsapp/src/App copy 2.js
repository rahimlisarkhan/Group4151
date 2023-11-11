import { Child } from "./components/Child";
import { Events } from "./components/Events";

function App() {
  const handleText = () => {
    console.log("text");
  };

  const handleCavab = (a) => {
    console.log("a", a);
  };

  return (
    <div className="App">
      <h1>React Events</h1>
      {/* <Events /> */}

      <Child showText={handleText} handleCavab={handleCavab} />
    </div>
  );
}

export default App;

// const props = {

//   showText: () => {
//     console.log("text...");
//   },
// };
