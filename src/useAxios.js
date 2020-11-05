import { useState } from "react";
import axios from "axios";

export const useAxios = () => {

    const [users, setUsers] = useState([]);
    const getData = () => {
      axios.get(`https://replitexpress.magneka.repl.co/users2`).then(res => {
        console.log(res)
        setUsers(res.data)
      })
      .catch(error => {
        console.log(error)
      })
    }

    return { users, getData}
  }