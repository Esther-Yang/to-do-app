import { Fragment } from "react";
import TaskItem from "./TaskItem";
import classes from "./TaskList.module.css";

const TaskList = (props) => {
  return (
    <Fragment>
      <ul className={classes.taskList}>
        {props.items.map((task) => (
          <TaskItem key={task.id} id={task.id} onDelete={props.onDelete}>
            {task.text}
          </TaskItem>
        ))}
      </ul>
    </Fragment>
  );
};

export default TaskList;
