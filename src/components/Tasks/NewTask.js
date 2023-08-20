import React from "react";
import useHttp from "../../hooks/useHttp";

import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { loading, error, httpRequest } = useHttp();

  const taskInputHandler = async (task) => {

    const httpDataHandler = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: task };

      props.onAddTask(createdTask);
    };

    httpRequest(
      {
        url: "https://react-http-testing-f9590-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { id: Math.random(), text: task },
        headers: {
          "Content-Type": "application/json",
        },
      },
      httpDataHandler
    );
  };

  return (
    <section>
      <TaskForm onEnterTask={taskInputHandler} loading={loading} />
      {error && <p>{error}</p>}
    </section>
  );
};

export default NewTask;
