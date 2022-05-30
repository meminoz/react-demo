import React from "react";
import SingleUser from "./SingleUser";
import { useSelector } from "react-redux";

const UserList = async () => {
  const [id, setId] = React.useState(5);

  const users = useSelector((state) => state.counters.users);

  const idHandler = (event) => {
    setId(event.target.value);
  };
  console.log(users);

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
};

export default UserList;
