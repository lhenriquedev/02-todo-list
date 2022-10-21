import logoTodo from '../../assets/logo-todo.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoTodo} alt="Logo da página" />
    </header>
  );
}