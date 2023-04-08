import React, { useState } from "react";
import "./UsernameForm.css";

const UsernameForm = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: enteredUsername,
      age: enteredAge,
    };

    setEnteredUsername("");
    setEnteredAge("");

    console.log(userData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-user__controls">
        <div className="new-user__control">
          <label>Username</label>
          <input type="text" value={enteredUsername} onChange={usernameChangeHandler} />
        </div>
        <div className="new-user__control">
          <label>Age(Years)</label>
          <input type="number" value={enteredAge} onChange={ageChangeHandler} />
        </div>
        <div className="new-user__actions">
          <button type="submit">Add User</button>
        </div>
      </div>
    </form>
  );
};

export default UsernameForm;
