import React, { useEffect, useState } from "react";

import NewTask from "./components/Tasks/NewTask";
import TaskList from "./components/Tasks/TaskList";
import ForwardCounter from "./components/ForwardCounter";
import BackwardCounter from "./components/BackwardCounter";
import useHttp from "./hooks/useHttp";

function App() {
  const [tasks, setTasks] = useState([]);
  const { loading, error, httpRequest } = useHttp();

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
    // console.log("Test : ",task)
  };

  useEffect(() => {
    let loadedTasks = [];

    const httpDataHandler = (data) => {
      for (const i in data) {
        loadedTasks.push({ id: i, text: data[i].text });
      }
      setTasks(loadedTasks);
    };

    httpRequest(
      {
        url: "https://react-http-testing-f9590-default-rtdb.firebaseio.com/tasks.json",
      },
      httpDataHandler
    );
  }, [httpRequest]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <h1>
        <u>Counters</u>
      </h1>
      <ForwardCounter />
      <BackwardCounter />

      <h1>
        <u>Tasks</u>
      </h1>
      <NewTask onAddTask={taskAddHandler} />
      <TaskList
        tasks={tasks}
        loading={loading}
        error={error}
        onFetch={httpRequest}
      />
    </>
  );
}

export default App;
