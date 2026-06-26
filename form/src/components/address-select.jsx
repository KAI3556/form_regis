import styles from '../adress-fom.module.css'

export default function AddressSelect({ value, onChange, options, placeholder, error }) {
    return (
        <div className={styles.selectWrap}>
            <select
                className={`${styles.select} ${!value ? styles.placeholder : ''} ${error ? styles.error : ''}`}
                value={value}
                onChange={onChange}
            >
                <option value="" disabled hidden>{placeholder}</option>
                {options.map(o => (
                    <option key={o.id} value={o.id}>{o.name}</option>
                ))}
            </select>
            <ChevronDown className={styles.selectArrow} />
        </div>
    )
}

function ChevronDown({ className }) {
    return (
        <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}