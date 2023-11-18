import React, {
  memo,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import Header from "../../components/Header";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const pi = 3.14;

// const headers = ["Name", "ATH", "Points"];
// const user = 90;

const About = memo((props) => {
  const [data, setData] = useState(0);
  const [data2, setData2] = useState(0);
  const [data3, setData3] = useState(0);

  const id = useId();

  console.log("id", id);

  useDocumentTitle("About | App");

  // const pi = useRef(3.14 * props.price);

  // const pi = useMemo(() => 3.14, []);

  const user = useRef(90);

  // const piRandom = 3.14 * data3;
  const piRandom = useMemo(() => {
    const result = 3.14 * data3;

    return result;
  }, [data3, props.price]);

  // const pi = 3.14;
  // const user = 90;

  const handleData = () => {
    const randomNum = Math.ceil(Math.random() * 100);
    setData(randomNum);
  };

  const handleData2 = useCallback(() => {
    const randomNum = Math.ceil(Math.random() * 100);
    setData2(randomNum);
  }, [data2, props.amount]);

  const handleData3 = () => {
    const randomNum = Math.ceil(Math.random() * 100);
    setData3(randomNum);
  };

  const handleTotalPrice = useCallback((num) => {
    // const result = 45 * props.price + data3 + num;
    // const result = 45 * data3 + num;
    const result = 45 * num;
    console.log(result);
  }, []);

  return (
    <div>
      <Header />
      <h1>PI: {pi}</h1>
      <h1>USER: {user.current}</h1>
      <h1>piRandom : {piRandom}</h1>
      <h2>Random: {data}</h2>
      <h2>Random2: {data2}</h2>
      <h2>Random3: {data3}</h2>
      About
      <button onClick={() => handleTotalPrice(100)}>price</button>
      <button onClick={() => handleTotalPrice(200)}>price 200</button>
      <button onClick={handleData}>set</button>
      <button onClick={handleData2}>set2</button>
      <button onClick={handleData3}>set3</button>
    </div>
  );
});

export default About;
