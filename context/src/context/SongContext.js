import React, { useState, createContext } from "react";

export const SongContext = createContext();

const SongContextProvider = ({ children }) => {
  const [songs, setSongs] = useState([
    {
      title: "In corpore sano",
      id: 0,
    },
    {
      title: "Mitar Miric Doberman",
      id: 1,
    },
    {
      title: "Bodom after Midnight",
      id: 2,
    },
  ]);

  return (
    <SongContextProvider value={{ songs }}>{children}</SongContextProvider>
  );
};

export default SongContextProvider;
