import React from "react";
import NewUser from "./components/new user/NewUser";
import User from "./components/users/User";

function App() {
  const users = [
    { name: "Zoran", age: 58 },
    { name: "Zoran", age: 58 },
  ];

  return (
    <div>
      <NewUser />
      <User />
    </div>
  );
}

export default App;
