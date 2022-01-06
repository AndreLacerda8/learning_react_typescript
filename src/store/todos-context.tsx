import React, { useState } from 'react'
import { Todo } from '../models/todo'

type TodosContextObj = {
  items: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {}
})

export const TodosContextProvider: React.FC = props => {
  const [todos, setTodos] = useState<Todo[]>([])

  function addTodoHandler(text: string){
    const newTodo = { id: Math.random().toString(), text }
    setTodos(prev => [...prev, newTodo])
  }

  function removeTodoHandler(todoId: string){
    setTodos(prev => prev.filter(todo => todo.id !== todoId))
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
}