import axios from "axios";
import React, { useEffect } from "react";
import SingleUser from "./SingleUser";
function UserList() {
  const [users, setName] = React.useState([]);
  const [id, setId] = React.useState(5);
  const fetUser = async () => {
    const respose = await axios.get(`https://randomuser.me/api/?results=${id}`);
    setName(respose.data.results);
  };
  useEffect(() => {
    fetUser();
  }, [id]);
  const idHandler = (event) => {
    setId(event.target.value);
  };
  return (
    <div className="user-list">
      <input type={"text"} onChange={idHandler} />
      <ul>
        {users.map((user, idx) => (
          <li>
            <SingleUser user={user} key={idx} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
