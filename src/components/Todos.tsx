import { Todo } from '../models/todo'
import { TodoItem } from './TodoItem'

import styles from './Todos.module.css'

export const Todos: React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map(item => (
        <TodoItem onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} text={item.text} key={item.id} />
      ))}
    </ul>
  )
}