import React from "react";
import SingleUser from "./SingleUser";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../store/ui-slice";
const UserList = async () => {
  const [users, setName] = React.useState([]);
  const [id, setId] = React.useState(5);
  const dispatch = useDispatch();
  const run = () => {
    dispatch(fetchUser(id));
  };
  run();
  const name = await useSelector((state) => state.counter.names);

  setName(name);

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
};

export default UserList;
