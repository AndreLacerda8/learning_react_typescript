import { useContext } from 'react'
import { TodosContext } from '../store/todos-context'
import { TodoItem } from './TodoItem'

import styles from './Todos.module.css'

export const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext)

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map(item => (
        <TodoItem onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} text={item.text} key={item.id} />
      ))}
    </ul>
  )
}