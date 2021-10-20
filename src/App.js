import "./App.css";
import { Fragment, useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  //task list state, initial state is with 2 dummy tasks
  const [taskList, setTaskList] = useState([
    { id: "t1", text: "Exercise" },
    { id: "t2", text: "Send Email" },
  ]);

  const addTaskHandler = (enteredText) => {
    setTaskList((prevTaskList) => {
      const updatedTaskList = [...prevTaskList];
      updatedTaskList.unshift({
        id: Math.random().toString(36).substr(2, 9),
        text: enteredText,
      });
      return updatedTaskList;
    });
  };

  const deleteTaskHandler = (targetId) => {
    setTaskList((prevTaskList) => {
      const updatedTaskList = prevTaskList.filter(
        (task) => task.id !== targetId
      );
      return updatedTaskList;
    });
  };

  //Display the content
  let content = <p>No tasks found.</p>;

  if (taskList.length > 0) {
    content = <TaskList items={taskList} onDelete={deleteTaskHandler} />;
  }

  return (
    <Fragment>
      <section>{content}</section>
    </Fragment>
  );
}

export default App;
