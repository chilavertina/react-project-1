import React, { useState } from "react";
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
    <div>
      <UsernameForm onAddUser={addUserHandler} />
      <Users users={usersList} />
    </div>
  );
};

export default App;
