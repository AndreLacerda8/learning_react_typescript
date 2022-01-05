import React from 'react'
import styles from './TodoItem.module.css'

export const TodoItem: React.FC<{ text: string, onRemoveTodo: () => void }> = (props) => {
  return (
    <li onClick={props.onRemoveTodo} className={styles.item}>{props.text}</li>
  )
}