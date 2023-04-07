import React from "react";
import "./UsernameForm.css";

const UsernameForm = () => {
  return (
    <form>
      <div className="new-user__controls">
        <div className="new-user__control">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="new-user__control">
          <label>Age(Years)</label>
          <input type="number" />
        </div>
        <div className="new-user__actions">
          <button type="submit">Add User</button>
        </div>
      </div>
    </form>
  );
};

export default UsernameForm;
