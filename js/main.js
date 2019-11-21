let dsNhanVien = new DanhSachNhanVien();
var validation = new Validation();
getLocalStorage();

function getEle(id) { return document.getElementById(id) }

getEle("btnThem").addEventListener("click", function () {
    getEle("btnCapNhat").style.display = "none";
    getEle("btnThemNV").style.display = "block";
    getEle("msnv").removeAttribute("disabled"); //remove vi o suaNhanVien da set
    clearInputs();
})

getEle("btnThemNV").addEventListener("click", function () {
    var maNV = getEle("msnv").value;
    var tenNV = getEle("name").value;
    var email = getEle("email").value;
    var password = getEle("password").value;
    var ngayLam = getEle("datepicker").value;
    var chucVu = getEle("chucvu").value;
    //validation
    let isValid = true;

    isValid &=
        validation.kiemTraRong(maNV, "tbMaNV", "Ma nhan vien khong dươc rong") &&
        validation.kiemTraMaTrung(
            maNV,
            "tbMaNV",
            "Ma nhan vien khong dươc trùng",
            dsNhanVien.mangNV
        ) &&
        validation.kiemTraDoDaiKyTu(maNV, "tbMaNV", "(*) Ký tự từ 6 - 12", 6, 12);

    //ten NV
    isValid &=
        validation.kiemTraRong(tenNV, "tbTen", "Ten nhan vien khong dươc rong") &&
        validation.kiemTraChuoi(tenNV, "tbTen", "Ten nhan vien khong hop le");

    //email
    isValid &=
        validation.kiemTraRong(
            email,
            "tbEmail",
            "Email nhan vien khong dươc rong"
        ) && validation.kiemTraEmail(email, "tbEmail", "(*) Email không hợp lệ");

    //password
    isValid &= validation.kiemTraRong(
        password,
        "tbMatKhau",
        "Password nhan vien khong dươc rong"
    );

    //Chuc Vu
    isValid &= validation.kiemTraChucVu(
        "chucvu",
        "tbChucVu",
        "(*) Vui lòng chọn chức vụ!"
    );

    if (isValid) {
        var nv = new NhanVien(maNV, tenNV, email, password, ngayLam, chucVu);
        dsNhanVien.themNV(nv);
        hienThi();
        setLocalStorage();
        getEle("btnDong").click();
    }
})

const clearInputs = () => {
    getEle("msnv").value = "";
    getEle("name").value = "";
    getEle("email").value = "";
    getEle("password").value = "";
    getEle("datepicker").value = new Date().toLocaleDateString();
    getEle("chucvu")[0].selected = true;
}

function hienThi() {
    let tbody = getEle("tableDanhSach");
    let content = "";
    dsNhanVien.mangNV.map((item, index) => {
        content += `<tr>
            <td>${item.maNV}</td>
            <td>${item.tenNV}</td>
            <td>${item.email}</td>
            <td>${item.ngayLam}</td>
            <td>${item.chucVu}</td>
            <td>
                <button class="btn btn-success" onclick="suaNhanVien('${item.maNV}')" data-toggle="modal" data-target="#myModal">Sửa</button>
                <button class="btn btn-danger" onclick="xoaNhanVien('${index}')">Xóa</button>
            </td>
        </tr>`
    })
    tbody.innerHTML = content;
}

function xoaNhanVien(index) {
    dsNhanVien.mangNV.splice(index, 1);
    hienThi();
    setLocalStorage();
}

function suaNhanVien(maNV) {
    getEle("btnCapNhat").style.display = "block";
    getEle("btnThemNV").style.display = "none";

    let nhanVien = dsNhanVien.layThongTinNhanVien(maNV);

    getEle("msnv").value = nhanVien.maNV;
    getEle("msnv").setAttribute("disabled", "");
    getEle("name").value = nhanVien.tenNV;
    getEle("email").value = nhanVien.email;
    getEle("password").value = nhanVien.password;
    getEle("datepicker").value = nhanVien.ngayLam;
    getEle("chucvu").value = nhanVien.chucVu;

    // console.log(nhanVien)
}

getEle("btnCapNhat").addEventListener("click", function () {
    let maNV = getEle("msnv").value;
    let tenNV = getEle("name").value;
    let email = getEle("email").value;
    let password = getEle("password").value;
    let ngayLam = getEle("datepicker").value;
    let chucVu = getEle("chucvu").value;

    const nhanVien = new NhanVien(maNV, tenNV, email, password, ngayLam, chucVu)
    dsNhanVien.capNhatNhanVien(nhanVien);
    hienThi();
    setLocalStorage();
    getEle("btnDong").click();
})

//arrow funcition phai khoi tao truoc khi goi
function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsNhanVien.mangNV))
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV")) {
        dsNhanVien.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThi();
    }
}



