import styles from "./Task.module.css";

import trash from "../../assets/trash.svg";
import checked from "../../assets/checked.svg";
import check from "../../assets/check.svg";

interface Task {
  id: number;
  isCompleted: boolean;
  content: string;
}

interface TaskProps {
  task: Task;
  onDeleteTask: (task: Task) => void;
  onCompleteTask: (task: number) => void;
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task);
  }

  function handleCompletedTask() {
    onCompleteTask(task.id);
  }

  return (
    <div className={styles.task}>
      <div className={styles.iconAndText} onClick={() => handleCompletedTask()}>
        {task.isCompleted ? (
          <>
            <img src={checked} alt="" />
            <p className={styles.taskCompleted}>{task.content}</p>
          </>
        ) : (
          <>
            <img src={check} alt="" />
            <p className={styles.taskUnCompleted}>{task.content}</p>
          </>
        )}
      </div>

      <button onClick={() => handleDeleteTask()}>
        <img src={trash} />
      </button>
    </div>
  );
}
