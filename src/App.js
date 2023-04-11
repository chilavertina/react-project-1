import React, { useState, Fragment } from "react";
import Users from "./components/users/Users";
import UsernameForm from "./components/new user/UsernameForm";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsers) => {
      return [...prevUsers, { name: userName, age: userAge, id: Math.random().toString() }];
    });
  };

  return (
    <Fragment>
      <UsernameForm onAddUser={addUserHandler} />
      <Users users={usersList} />
    </Fragment>
  );
};

export default App;
