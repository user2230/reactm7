import styles from './ListItem.module.css'

export function ListItem({ number, title, author }) {
    return (
        <li className={styles.item}>
            <div className={styles.number}>{number}</div>
            <div className={styles.container}>
                <h3>{title}</h3>
                <h4>{author}</h4>
            </div>
        </li>
    )
}