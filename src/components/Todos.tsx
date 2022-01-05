import { Todo } from '../models/todo'
import { TodoItem } from './TodoItem'

import styles from './Todos.module.css'

export const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map(item => (
        <TodoItem text={item.text} key={item.id} />
      ))}
    </ul>
  )
}