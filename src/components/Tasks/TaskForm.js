import { useRef } from 'react';

import classes from './TaskForm.module.css';

const TaskForm = (props) => {
  const taskRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    if (taskRef.current.value.trim().length > 0) {
      props.onEnterTask(taskRef.current.value);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type='text' ref={taskRef} />
      <button className={classes['btn-add']}>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
