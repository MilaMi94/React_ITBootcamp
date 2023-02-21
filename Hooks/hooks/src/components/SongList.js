import React, { useState } from "react";
import NewSongForm from "./NewSongForm";
import { v4 as uuidv4 } from "uuid";

const SongList = () => {
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

  const addSong = (title) => {
    setSongs((prevState) => [...prevState, { title, id: uuidv4() }]); // generise neki id random koji nece nikad da se ponovi ponovo, unique je
  };

  return (
    <>
      <h2>My song list</h2>
      <ul>
        {songs.map(({ title, id }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
    </>
  );
};

export default SongList;
