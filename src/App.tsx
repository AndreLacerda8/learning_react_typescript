import { useState } from 'react'
import { NewTodo } from './components/NewTodo'
import { Todos } from './components/Todos'
import { Todo } from './models/todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  function addTodoHandler(text: string){
    const newTodo = { id: Math.random().toString(), text }
    setTodos(prev => [...prev, newTodo])
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
