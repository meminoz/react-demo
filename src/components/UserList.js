import axios from "axios";
import React, { useEffect } from "react";

function UserList() {
  const [name, setName] = React.useState([]);

  const fetUser = async () => {
    const respose = await axios.get("https://randomuser.me/api/?results=5");
    setName(respose.data.results);
  };
  useEffect(() => {
    fetUser();
  }, []);
  console.log(name);
  return <div>UserList</div>;
}

export default UserList;
