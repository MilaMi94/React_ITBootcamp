import React, { useEffect, useState } from "react";

const Select = () => {
  const [select, setSelect] = useState("posts");
  const [items, setItems] = useState([]);

  /*fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setItems());
*/
  //Prilikom renderovanja komponente, uradite API poziv ka
  //https://jsonplaceholder.typicode.com/ .I niz koji dobijete upisite u vas state koji se naziva items

  const handleSelect = (e) => {
    setSelect((prevState) => (prevState = e.target.value));
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${select}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [select]);

  // Prilikom promene state-a koji kontrolice select value (koristeci useEffect method), pozovite ponovu vas API poziv

  return (
    <form>
      <select onChange={handleSelect}>
        <option value="posts">posts</option>
        <option value="comments">comments</option>
        <option value="albums">albums</option>
      </select>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.body}</li>;
        })}
      </ul>
    </form>
  );
};

export default Select;
