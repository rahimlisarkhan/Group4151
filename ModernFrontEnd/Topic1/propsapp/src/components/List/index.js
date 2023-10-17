import React from "react";
import style from "./List.module.css";

export const List = (props) => {
  console.log("List", props);

  return <div className={style.container}>{props.children}</div>;
};
