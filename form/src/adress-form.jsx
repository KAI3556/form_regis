import styles from './AddressForm.module.css'
import { useAddressForm } from './hooks/useAddressForm.js'
import FormField from './components/FormField.jsx'
import AddressSelect from './components/AddressSelect.jsx'
import DetailTextarea from './components/DetailTextarea.jsx'
import SuccessBox from './components/SuccessBox.jsx'

export default function AdressForm() {
    const f = useAddressForm()

    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>Địa chỉ mới</h1>

            <form onSubmit={f.handleSubmit} noValidate>
                <div className={styles.row}>
                    <FormField
                        placeholder="Họ và tên"
                        value={f.fields.fullName}
                        onChange={e => f.setFullName(e.target.value)}
                        error={f.errors.fullName}
                    />
                    <FormField
                        type="tel"
                        placeholder="Số điện thoại"
                        value={f.fields.phone}
                        onChange={e => f.setPhone(e.target.value)}
                        error={f.errors.phone}
                    />
                </div>

                <AddressSelect
                    value={f.provinceId}
                    onChange={f.handleProvinceChange}
                    options={f.provinces}
                    placeholder="Tỉnh/Thành Phố, Quận/Huyện"
                    error={f.errors.location}
                />

                {f.provinceId && (
                    <AddressSelect
                        value={f.districtId}
                        onChange={f.handleDistrictChange}
                        options={f.availableDistricts}
                        placeholder="Chọn Quận/Huyện"
                        error={f.errors.location}
                    />
                )}

                {f.districtId && f.availableStreets.length > 0 && (
                    <AddressSelect
                        value={f.streetId}
                        onChange={e => f.setStreetId(e.target.value)}
                        options={f.availableStreets}
                        placeholder="Chọn Đường (không bắt buộc)"
                    />
                )}

                <DetailTextarea
                    value={f.fields.detail}
                    onChange={e => f.setDetail(e.target.value)}
                    error={f.errors.detail}
                />

                <div className={styles.submitRow}>
                    <button type="submit" className={styles.submitBtn}>Hoàn thành</button>
                </div>
            </form>

            {f.submitted && (
                <SuccessBox
                    fullName={f.fields.fullName}
                    phone={f.fields.phone}
                    detail={f.fields.detail}
                    summary={f.summary}
                />
            )}
        </div>
    )
}