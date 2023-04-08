import "./UserItem.css";

function UserItem(props) {
  const userName = "Zoran";
  const userAge = 58;
  return (
    <div className="user-item">
      <div>{props.name}</div>
      <div>({props.age} years old)</div>
    </div>
  );
}

export default UserItem;
