import { Injectable } from '@angular/core';
import { Buglog } from "./buglog";
@Injectable({
  providedIn: 'root'
})
export class BuglogService {

  getLogs(): Buglog[]{
    return [
      {
        id: 1,
        ngay_ghi_nhan: new Date(),
        user_ghi_nhan: "nghiemnh",
        mo_ta_log: "Đây là log 1",
        moi_truong: "DEV",
        vi_tri: "PD1",
        loai_log: 1,
        trang_thai_log: 1,
        dev_thuc_hien: "liemdc",
        ngay_test_lai: "12/12/2000"
      },
       {
        id: 2,
        ngay_ghi_nhan: new Date(),
        user_ghi_nhan: "oanhnt5",
        mo_ta_log: "Đây là log 2",
        moi_truong: "UAT",
        vi_tri: "PD3",
        loai_log: 2,
        trang_thai_log: 3,
        dev_thuc_hien: "duyendth",
        ngay_test_lai: "12/12/2021"
      }
    ]
  } 

  constructor() { }
}
