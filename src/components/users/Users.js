import React from "react";
import UserItem from "./UserItem";

const Users = (props) => {
  return (
    <div className="new-users">
      {props.users.map((user) => (
        <UserItem key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
};

export default Users;
