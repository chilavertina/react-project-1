import React from "react";
import UserItem from "./UserItem";

function Users() {
  return (
    <div>
      <UserItem name={users[0].name} age={users[0].age} />
      <UserItem name={users[1].name} age={users[1].age} />
    </div>
  );
}

export default Users;
