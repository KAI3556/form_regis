import styles from '../adress-fom.module.css'

export default function SuccessBox({ fullName, phone, detail, summary }) {
    return (
        <div className={styles.successBox}>
            Đã lưu địa chỉ: {fullName} — {phone} — {detail}
            {summary.streetName && `, ${summary.streetName}`}
            {summary.districtName && `, ${summary.districtName}`}
            {summary.provinceName && `, ${summary.provinceName}`}
        </div>
    )
}