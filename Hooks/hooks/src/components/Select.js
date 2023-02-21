import React, { useEffect, useState } from "react";

const Select = () => {
  const [select, setSelect] = useState("posts");
  const [items, setItems] = useState([]);
  /*
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => setItems(json));*/
  //Prilikom renderovanja komponente, uradite API poziv ka
  //https://jsonplaceholder.typicode.com/ .I niz koji dobijete upisite u vas state koji se naziva items

  const handleSelect = (e) => {
    setSelect((prevState) => (prevState = e.target.value));
  };

  // Prilikom promene state-a koji kontrolice select value (koristeci useEffect method), pozovite ponovu vas API poziv

  return (
    <form>
      <select onChange={handleSelect}>
        <option value="posts">posts</option>
        <option value="comments">comments</option>
        <option value="albums">albums</option>
      </select>

      {/* <ul>
        {items.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul> */}
    </form>
  );
};

export default Select;
