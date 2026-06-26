import { useState, useMemo } from "react";
import { vietnameseAddresses } from "../addresses.js";

const { provinces, districts, streets } = vietnameseAddresses;

export function useAddressForm() {
    const [fullName, setFullName]     = useState("");
    const [phone, setPhone]           = useState("");
    const [provinceId, setProvinceId] = useState("");
    const [districtId, setDistrictId] = useState("");
    const [streetId, setStreetId]     = useState("");
    const [detail, setDetail]         = useState("");
    const [errors, setErrors]         = useState({});
    const [submitted, setSubmitted]   = useState(false);

    const availableDistricts = useMemo(
        () => districts.filter(d => d.province_id === provinceId),
        [provinceId]
    )

    const availableStreets = useMemo(
        () => streets.filter(s => s.district_id === districtId),
        [districtId],
    );

    const handleProvinceChange = (e) => {
        setProvinceId(e.target.value);
        setDistrictId("");
        setStreetId("");
    }

    const handleDistrictChange = (e) => {
        setDistrictId(e.target.value);
        setStreetId("");
    }

    const validate = () => {
        const next = {};
        if (!fullName.trim()) next.fullName = "Vui lòng nhập họ và tên";
        if (!phone.trim()) next.phone = "Vui lòng nhập số điện thoại";
        else if (!/^[0-9]{9,11}$/.test(phone.trim())) next.phone = "Số điện thoại không hợp lệ";
        if (!provinceId) next.location = "Vui lòng chọn Tỉnh/Thành phố, Quận/Huyện";
        else if (!districtId) next.location = "Vui lòng chọn Quận/Huyện";
        if (!detail.trim()) next.detail = "Vui lòng nhập địa chỉ cụ thể";
        setErrors(next);
        return Object.keys(next).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(false);

        if (validate()) {
            setSubmitted(true);
        }
    };

    const summary = {
        provinceName: provinces.find(p => p.id === provinceId)?.name || "",
        districtName: districts.find(d => d.id === districtId)?.name || "",
        streetName: streets.find(s => s.id === streetId)?.name || "",
    };

    return {
        fields: { fullName, phone, detail },
        setFullName, setPhone, setDetail,
        provinceId, districtId, streetId,
        setStreetId,
        provinces, availableDistricts, availableStreets,
        handleProvinceChange, handleDistrictChange,
        errors, submitted, summary,
        handleSubmit,
    };
}

