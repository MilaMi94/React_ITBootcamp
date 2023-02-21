import React, { useEffect, useState } from "react";

const Select = () => {
  const [state, setState] = useState("posts");
  const [items, setItems] = useState([]);

  const handleSelect = (e) => {
    setState(e.target.value);
  };

  //Prilikom renderovanja komponente, uradite API poziv ka
  //https://jsonplaceholder.typicode.com/ .I niz koji dobijete upisite u vas state koji se naziva items
  useEffect(() => {
    console.log("Komponenta se renderovala");
    fetch(`https://jsonplaceholder.typicode.com/${state}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((err) => console.log(err));
  }, []); // prazan string drugi argument jer zelimo prilikom renderovanja

  // Prilikom promene state-a koji kontrolice select value (koristeci useEffect method), pozovite ponovo vas API poziv

  useEffect(() => {
    console.log("Komponenta se updejtovala");
    fetch(`https://jsonplaceholder.typicode.com/${state}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [state]); // drugi argument pozivamo kad zelimo na update i tu stavljamo od cega nam zavisi update

  return (
    <div>
      <form style={{ marginTop: 20 }}>
        <select
          style={{ borderRadius: 5 }}
          value={state}
          onChange={handleSelect}
        >
          <option value="posts">Posts</option>
          <option value="comments">Comments</option>
          <option value="albums">Albums</option>
        </select>
        {/* Ispisite items  u unorder list */}
      </form>
      <ul>
        {items.map((item, index) => {
          return (
            <li style={{ margin: 10, color: "blue" }} key={index}>
              {JSON.stringify(item)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
