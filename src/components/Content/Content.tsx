import styles from "./Content.module.css";
import plus from "../../assets/plus.svg";
import { ChangeEvent, FormEvent, useState } from "react";

import { Summary } from "../Summary/Summary";
import { Task } from "../Task/Task";

import clipboard from "../../assets/clipboard.svg";

type Task = {
  id: number;
  content: string;
  isCompleted: boolean;
};

export function Content() {
  const [tasks, setTasks] = useState([
    {
      id: newId(),
      content: "Criação de um projeto com React e Typescript",
      isCompleted: false,
    },
    {
      id: newId(),
      content: "Criação de um projeto com NextJS",
      isCompleted: true,
    },
  ]);
  const [newTask, setNewTask] = useState("");

  function newId() {
    return Math.floor(Math.random() * 100);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const updateTask = {
      id: newId(),
      isCompleted: false,
      content: newTask,
    };

    setTasks([...tasks, updateTask]);
    setNewTask("");
  }

  function handleCompletedTask(id: number) {
    const tasksCompleted = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    setTasks(tasksCompleted);
  }

  function deleteTask(taskToDelete: Task) {
    const tasksFiltered = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(tasksFiltered);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  const allCompletedTasks = tasks.filter(task => task.isCompleted);

  return (
    <section className={styles.content}>
      <form onSubmit={handleCreateNewTask} className={styles.form}>
        <input
          className={styles.inputTask}
          type="text"
          placeholder="Adicione uma nova tarefa"
          required
          value={newTask}
          onChange={handleNewTaskChange}
        />
        <button className={styles.button}>
          Criar
          <img src={plus} />
        </button>
      </form>

      <Summary tasks={tasks} tasksCompleted={allCompletedTasks}/>

      <div className={styles.wrapperTask}>
        {tasks.length === 0 && (
          <div className={styles.emptyTasks}>
            <img src={clipboard} alt="Ícone mostrando que não tem tarefa" />
            <p className={styles.emptyTaskBold}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onDeleteTask={deleteTask}
              onCompleteTask={handleCompletedTask}
            />
          );
        })}
      </div>
    </section>
  );
}
