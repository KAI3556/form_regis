export const vietnameseAddresses = {
    provinces: [
        { name: "Hà Nội", id: "ha_noi" },
        { name: "Đà Nẵng", id: "da_nang" },
        { name: "Hồ Chí Minh", id: "ho_chi_minh" }
    ],

    districts: [
        // Hà Nội
        { name: "Ba Đình", id: "ba_dinh", province_id: "ha_noi" },
        { name: "Bắc Từ Liêm", id: "bac_tu_liem", province_id: "ha_noi" },
        { name: "Hoàn Kiếm", id: "hoan_kiem", province_id: "ha_noi" },

        // Đà Nẵng
        { name: "Hải Châu", id: "hai_chau", province_id: "da_nang" },
        { name: "Sơn Trà", id: "son_tra", province_id: "da_nang" },
        { name: "Ngũ Hành Sơn", id: "ngu_hanh_son", province_id: "da_nang" },

        // Hồ Chí Minh
        { name: "Quận 1", id: "quan_1", province_id: "ho_chi_minh" },
        { name: "Quận 3", id: "quan_3", province_id: "ho_chi_minh" },
        { name: "Bình Thạnh", id: "binh_thanh", province_id: "ho_chi_minh" }
    ],

    streets: [
        // Ba Đình
        { name: "Hoàng Hoa Thám", id: "hoang_hoa_tham", district_id: "ba_dinh" },
        { name: "Đội Cấn", id: "doi_can", district_id: "ba_dinh" },
        { name: "Kim Mã", id: "kim_ma", district_id: "ba_dinh" },

        // Bắc Từ Liêm
        { name: "Phạm Văn Đồng", id: "pham_van_dong", district_id: "bac_tu_liem" },
        { name: "Cổ Nhuế", id: "co_nhue", district_id: "bac_tu_liem" },
        { name: "Xuân Đỉnh", id: "xuan_dinh", district_id: "bac_tu_liem" },

        // Hoàn Kiếm
        { name: "Hàng Bài", id: "hang_bai", district_id: "hoan_kiem" },
        { name: "Tràng Tiền", id: "trang_tien", district_id: "hoan_kiem" },
        { name: "Lý Thường Kiệt", id: "ly_thuong_kiet", district_id: "hoan_kiem" },

        // Hải Châu
        { name: "Bạch Đằng", id: "bach_dang", district_id: "hai_chau" },
        { name: "Nguyễn Văn Linh", id: "nguyen_van_linh", district_id: "hai_chau" },
        { name: "Lê Duẩn", id: "le_duan", district_id: "hai_chau" },

        // Sơn Trà
        { name: "Võ Nguyên Giáp", id: "vo_nguyen_giap", district_id: "son_tra" },
        { name: "Ngô Quyền", id: "ngo_quyen", district_id: "son_tra" },
        { name: "Phạm Văn Đồng", id: "pham_van_dong_son_tra", district_id: "son_tra" },

        // Ngũ Hành Sơn
        { name: "Nguyễn Văn Thoại", id: "nguyen_van_thoai", district_id: "ngu_hanh_son" },
        { name: "Lê Văn Hiến", id: "le_van_hien", district_id: "ngu_hanh_son" },
        { name: "Trần Đại Nghĩa", id: "tran_dai_nghia", district_id: "ngu_hanh_son" },

        // Quận 1
        { name: "Nguyễn Huệ", id: "nguyen_hue", district_id: "quan_1" },
        { name: "Lê Lợi", id: "le_loi", district_id: "quan_1" },
        { name: "Đồng Khởi", id: "dong_khoi", district_id: "quan_1" },

        // Quận 3
        { name: "Nam Kỳ Khởi Nghĩa", id: "nam_ky_khoi_nghia", district_id: "quan_3" },
        { name: "Cách Mạng Tháng Tám", id: "cach_mang_thang_tam", district_id: "quan_3" },
        { name: "Nguyễn Đình Chiểu", id: "nguyen_dinh_chieu", district_id: "quan_3" },

        // Bình Thạnh
        { name: "Điện Biên Phủ", id: "dien_bien_phu", district_id: "binh_thanh" },
        { name: "Xô Viết Nghệ Tĩnh", id: "xo_viet_nghe_tinh", district_id: "binh_thanh" },
        { name: "Nguyễn Hữu Cảnh", id: "nguyen_huu_canh", district_id: "binh_thanh" }
    ]
};