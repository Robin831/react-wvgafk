import React from "react";
import {useAxios} from "./useAxios";
import "./style.css";

export default function App() {
  

  const {users, getData} = useAxios();

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic! happen :)</p>

      <button onClick={getData}>Klikk på meg</button>

      <div>
        <ul>
          {users.map((item, i) => <li>{item.lastname}, {item.firstname}</li>)}
        </ul>
      </div>
    </div>
  );
}
