import styles from './TodoItem.module.css'

export const TodoItem: React.FC<{text: string}> = (props) => {
  return (
    <li className={styles.item}>{props.text}</li>
  )
}