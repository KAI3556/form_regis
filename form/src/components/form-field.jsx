import styles from '../adress-fom.module.css'

export default function FormField({ type = 'text', placeholder, value, onChange, error }) {
    return (
        <div>
            <input
                className={`${styles.field} ${error ? styles.error : ''}`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <div className={styles.errorMsg}>{error}</div>}
        </div>
    )
}