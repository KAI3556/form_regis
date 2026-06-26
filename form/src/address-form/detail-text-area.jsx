import styles from './address-form.module.css';

export default function DetailTextArea({ value, onChange, error }) {
    return (
        <div>
            <textarea
                className={`${styles.textarea} ${error ? styles.error : ''}`}
                placeholder="Địa chỉ cụ thể"
                value={value}
                onChange={onChange}
            />
            {error && <div className={styles.errorMsg}>{error}</div>}
        </div>
    )
}