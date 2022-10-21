import styles from "./Summary.module.css";

export function Summary({ tasks, tasksCompleted }) {
  return (
    <section className={styles.tasks}>
      <header className={styles.headerTasks}>
        <div>
          <p className={`${styles.summaryParagraph} ${styles.summaryBlue}`}>
            Tarefas criadas
          </p>
          <span className={`${styles.circleTasks} ${styles.createdTasks}`}>{tasks.length}</span>
        </div>
        <div>
          <p className={`${styles.summaryParagraph} ${styles.summaryPurple}`}>
            Concluídas
          </p>
          <span className={`${styles.circleTasks} ${styles.completedTasks}`}>{tasksCompleted.length} de {tasks.length}</span>
        </div>
      </header>
      <div className={styles.separator}></div>
    </section>
  );
}
