import React from "react";

export const Child = (props) => {
  console.log("Child", props);

  const cavabVer = () => {
    console.log("cavab ver isleyir...");

    props.handleCavab("Bu cavabi Chilldan oturdum!");
  };

  return (
    <div>
      <div>Child</div>
      <button onClick={props.showText}>Show</button>
      <button onClick={cavabVer}>Cavab ver</button>
    </div>
  );
};
