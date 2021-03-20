export class category {
    value: number;
    label: string;    
}

export const LOAI_LOG: category[] = [
    { value: 1, label: "Bug" },
    { value: 2, label: "Yêu cầu mới" },
    { value: 3, label: "Yêu cầu thay đổi" },
    { value: 4, label: "Không phải bug" },
    
];

export const TRANG_THAI_LOG: category[] = [
    { value: 1, label: "Chờ xác nhận" },
    { value: 2, label: "Chờ sửa" },
    { value: 3, label: "Fixed DEV chờ test lại" },
    { value: 4, label: "Đã test DEV" },
    { value: 5, label: "Fixed UAT chờ test lại" },
    { value: 6, label: "Test lại chưa đạt" },
    { value: 7, label: "Hoàn tất" },
    { value: 8, label: "Khoan sửa" }
    
];

