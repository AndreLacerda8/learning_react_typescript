import { Todos } from './components/Todos'
import { Todo } from './models/todo'

function App() {
  const todos: Todo[] = [
    { id: 't1', text: 'Learning React' },
    { id: 't2', text: 'Learning Typescript' }
  ]

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
