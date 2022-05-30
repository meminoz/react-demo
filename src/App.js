import React, { useEffect } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserList from "./components/UserList";
import { fetchUser } from "./store/ui-action";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  dispatch(fetchUser());

  return (
    <div className="App">
      <Header />
      <UserList />
      <Counter />
    </div>
  );
}

export default App;
