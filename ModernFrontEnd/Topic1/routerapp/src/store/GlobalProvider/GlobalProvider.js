import React, { createContext, useContext, useState } from "react";

export const globalContext = createContext();

export const useGlobalStore = () => {
  const value = useContext(globalContext);

  return value;
};

export const GlobalProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [favorites, setFavorites] = useState([]);

  console.log("favorites", favorites);

  const Component = globalContext.Provider;

  const handleFav = (item) => {
    const findel = favorites.find((el) => el.imdbID == item.imdbID);

    if (findel) {
      setFavorites((prevList) =>
        prevList.filter((el) => el.imdbID !== item.imdbID)
      );
    } else {
      setFavorites((prevList) => [...prevList, item]);
    }
  };

  const values = {
    count,
    setCount,
    favorites,
    handleFav,
  };

  return <Component value={values}>{children}</Component>;
};
