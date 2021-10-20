import { Fragment } from "react";
import { useState } from "react";
import classes from "./TaskInput.module.css";
import Button from "./UI/Button";

const TaskInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const taskInputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAdd(enteredValue);
  };

  return (
    <Fragment>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${classes["form-control"]} ${
            !isValid && classes["invalid"]
          }`}
        >
          <label>Task</label>
          <input type="text" onChange={taskInputHandler} />
        </div>
        <Button type="submit">Add Task</Button>
      </form>
    </Fragment>
  );
};

export default TaskInput;
