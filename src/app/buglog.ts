import { LOAI_LOG, TRANG_THAI_LOG } from './category'

export class Buglog {
    id: number;
    ngay_ghi_nhan: Date;
    user_ghi_nhan: string;
    mo_ta_log : string;
    moi_truong : string;
    vi_tri : string;
    loai_log: number;
    loai_log_str: string;
    trang_thai_log: number;
    trang_thai_str: string;
    dev_thuc_hien : string;
    ngay_test_lai: string;
    du_an: string;
}

export class Project {
    id: string;
    ten_du_an: string;
}