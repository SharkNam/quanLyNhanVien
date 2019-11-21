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

    // var xx = this.mangNV.filter(function (item, index) {
    //     if (item.maNV === nhanVien.maNV)
    //         return index;
    // })
    // console.log(xx);
    // return this.mangNV[index] = nhanVien
    var viTri = this.timViTri(nhanVien.maNV)
    // console.log(viTri)
    if (viTri !== -1) {
        this.mangNV[viTri] = nhanVien;
    }

}