import { Fragment } from "react";
import classes from "./TaskItem.module.css";

const TaskItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <Fragment>
      <li className={classes.taskItem} onClick={deleteHandler}>
        {props.children}
      </li>
    </Fragment>
  );
};

export default TaskItem;
