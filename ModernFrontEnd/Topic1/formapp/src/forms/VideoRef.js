import { useRef } from "react";

function App() {
  const videoRef = useRef();

  const handleStop = () => {
    videoRef.current.stop();
  };

  const handlePlay = () => {
    videoRef.current.play();
  };

  return (
    <div className="App">
      <h1>React Form</h1>
      <div className="container">
        <div className="d-flex flex-column gap-5">
          <video ref={videoRef} poster="/images/w3html5.gif">
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>

          <button onClick={handlePlay}>Play</button>
          <button onClick={handleStop}>Stop</button>
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
