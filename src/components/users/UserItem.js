import Card from "../UI/Card";
import classes from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <Card className={classes.users}>
      <ul className="user-item">
        <li>
          {props.name} ({props.age} years old)
        </li>
      </ul>
    </Card>
  );
};

export default UserItem;
