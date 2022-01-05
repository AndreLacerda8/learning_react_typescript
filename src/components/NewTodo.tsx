import React, { useRef } from 'react'
import styles from './NewTodo.module.css'

export const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredText = todoTextInputRef.current!.value
    if(enteredText.trim().length === 0){
      return
    }
    props.onAddTodo(enteredText)
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type="text" id='text' ref={todoTextInputRef} />
      <button type='submit'>Add todo</button>
    </form>
  )
}