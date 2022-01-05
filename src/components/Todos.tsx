import { Todo } from '../models/todo'
import { TodoItem } from './TodoItem'

export const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map(item => (
        <TodoItem text={item.text} key={item.id} />
      ))}
    </ul>
  )
}