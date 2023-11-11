import React, { useState } from "react";
// import Dice1 from "./";
// import Dice1 from "./";
// import Dice1 from "./";
// import Dice1 from "./";
// import Dice1 from "./";
// import Dice1 from "./";

const images = {
  dice1: "http1",
  dice2: Dice2,
  dice3: Dice3,
  dice4: Dice4,
};

export const DiceContent = () => {
  const [diceData, setDiceData] = useState();
  const [loading, setLoading] = useState();

  const handleRoll = () => {
    setLoading(true);

    setTimeout(() => {
      const num1 = Math.ceil(Math.random() * 6);
      const num2 = Math.ceil(Math.random() * 6);

      setDiceData({
        diceImg1: images[`dice${num1}`],
        diceImg2: images[`dice${num2}`],
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      {/* <DiceCard/> */}
      <img src={diceData.diceImg2} />

      <button onClick={handleRoll}>{loading ? "Rolling..." : "Roll"}</button>
    </div>
  );
};
