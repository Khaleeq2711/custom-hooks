import TaskItem from './TaskItem';
import classes from './TaskList.module.css';

const TaskList = (props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.tasks.length > 0) {
    taskList = (
      <ul>
        {props.tasks.map((task) => (
          <TaskItem key={task.id}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (props.loading) {
    content = 'Loading tasks...';
  }
  if (props.error) {
    content = <button onClick={props.onFetch} className={classes['btn-try']}>Try again</button>;
  }

  

  return (
    <section>
      <div className={classes.container}>{content}</div>
    </section>
  );
};

export default TaskList;
