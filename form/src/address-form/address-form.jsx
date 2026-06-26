import styles from './address-form.module.css'
import { useAddressForm } from './useAddressForm.js'
import FormField from './form-field.jsx'
import AddressSelect from './address-select.jsx'
import DetailTextArea from './detail-text-area.jsx'
import SuccessBox from './success-box.jsx'

export default function AddressForm() {
    const form = useAddressForm();

    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>Địa chỉ mới</h1>

            <form onSubmit={form.handleSubmit} noValidate>
                <div className={styles.row}>
                    <FormField
                        placeholder="Họ và tên"
                        value={form.fields.fullName}
                        onChange={e => form.setFullName(e.target.value)}
                        error={form.errors.fullName}
                    />
                    <FormField
                        type="tel"
                        placeholder="Số điện thoại"
                        value={form.fields.phone}
                        onChange={e => form.setPhone(e.target.value)}
                        error={form.errors.phone}
                    />
                </div>

                <AddressSelect
                    value={form.provinceId}
                    onChange={form.handleProvinceChange}
                    options={form.provinces}
                    placeholder="Tỉnh/Thành Phố, Quận/Huyện"
                    error={form.errors.location}
                />

                {form.provinceId && (
                    <AddressSelect
                        value={form.districtId}
                        onChange={form.handleDistrictChange}
                        options={form.availableDistricts}
                        placeholder="Chọn Quận/Huyện"
                        error={form.errors.location}
                    />
                )}

                {form.districtId && form.availableStreets.length > 0 && (
                    <AddressSelect
                        value={form.streetId}
                        onChange={e => form.setStreetId(e.target.value)}
                        options={form.availableStreets}
                        placeholder="Chọn Đường (không bắt buộc)"
                    />
                )}

                <DetailTextArea
                    value={form.fields.detail}
                    onChange={e => form.setDetail(e.target.value)}
                    error={form.errors.detail}
                />

                <div className={styles.submitRow}>
                    <button type="submit" className={styles.submitBtn}>Hoàn thành</button>
                </div>
            </form>

            {form.submitted && (
                <SuccessBox
                    fullName={form.fields.fullName}
                    phone={form.fields.phone}
                    detail={form.fields.detail}
                    summary={form.summary}
                />
            )}
        </div>
    )
}