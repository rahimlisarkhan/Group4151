import React, { useState } from "react";

// onClick
// OnMouse Events
// onBlur
// onFocus
// onChange

export const Events = () => {
  const [text, setText] = useState("");
  const [fullname, setFullname] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const [show, setShow] = useState(false);

  console.log("show", show);

  const handleRemoveBook = (e) => {
    console.log("click rmv");
  };

  const handleAddBook = (e) => {
    // console.log(e.target.value);
    // if (text.length > 20) {
    //   alert("Uzun text");
    //   return;
    // }

    const form = {
      title: text,
      //   fullname:fullname
      fullname,
    };

    console.log("click add", form);
  };

  const handleChangeText = (e) => {
    const value = e.target.value;

    setText(value);
  };

  const handleChangeFullname = (e) => {
    const value = e.target.value;
    setFullname(value);
  };

  return (
    <div>
      <div
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
      >
        Events
      </div>
      <div style={{ backgroundColor: show ? "yellow" : "white" }}>
        {/* {isFocus ? <h4>Zehmet olmasa duzgun doldurun</h4> : null} */}
        {isFocus && <h4>Zehmet olmasa duzgun doldurun</h4>}
        <input
          name="title"
          onFocus={() => {
            setIsFocus(true);
          }}
          // onClick={() => {
          //   console.log("Click...");
          // }}
          onBlur={() => {
            setIsFocus(false);
          }}
          onChange={handleChangeText}
        />
        <br />
        <span
          // className={`${styles.content} ${text.length > 20 ? styles.danger : ""}`}
          // className={`${styles.content} ${text.length > 20 ? styles.danger : ""}`}

          style={{ color: text.length > 20 ? "red" : "black" }}
        >
          {text.length} / 20
        </span>
        <br />
        <br />
        <input name="fullname" onChange={handleChangeFullname} />
        <br />
        <br />
        <button onClick={handleRemoveBook}>Click Remove</button>
        <button disabled={!show} onClick={handleAddBook} value={10}>
          Click Add
        </button>
        <button
          onClick={() => {
            console.log("click show");
          }}
        >
          Click Show
        </button>
      </div>
    </div>
  );
};
