function DanhSachNhanVien() {
    this.mangNV = [];

    this.themNV = function (nv) {
        this.mangNV.push(nv)
    }
    this.timViTri = function (maNV) {
        var viTri = -1;
        this.mangNV.map((item, index) => {
            if (item.maNV === maNV)
                viTri = index;
        })
        return viTri;
    }
    // this.xoaNhanVien = function (maNV) {
    //     var viTri = this.timViTri(maNV)
    //     if (viTri !== -1) {
    //         this.mangNV.splice(viTri, 1);
    //     }
    // }

    // this.xoaNhanVien = function (index) {
    //     this.mangNV.splice(index, 1);
    // }
}

DanhSachNhanVien.prototype.layThongTinNhanVien = function (maNV) {
    if (this.timViTri(maNV) !== -1) {
        return nhanVien = this.mangNV[this.timViTri(maNV)];
    }
}

DanhSachNhanVien.prototype.capNhatNhanVien = function (nhanVien) {
    //    CACH 1: FORM HAO
    //map trả về hết tất cả các phẩn tử trong mảng, nếu duyệt qua phần tử nhưng phần tử đó ko thỏa mãn điều kiện thì vị trí phần tử đó trong mảng mới là undefined
    let a = this.mangNV.map((item, index) => {
        if (item.maNV === nhanVien.maNV) {
            return nhanVien;
        }
        else { return item; }
    })
    // console.log(this.mangNV)
    // console.log(a)
    this.mangNV = a;
    //CACH 2
    // var viTri = this.timViTri(nhanVien.maNV)
    // if (viTri !== -1) {
    //     this.mangNV[viTri] = nhanVien;
    // }
}