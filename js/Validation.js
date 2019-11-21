function Validation() {
    this.kiemTraRong = function (inputVal, spanID, message) {
        if (inputVal === "") {
            //khong hop le
            getEle(spanID).style.display = "block";
            getEle(spanID).innerHTML = message;
            return false;
        }

        //hop le
        getEle(spanID).style.display = "none";
        getEle(spanID).innerHTML = "";
        return true;
    };

    this.kiemTraMaTrung = function (inputVal, spanID, message, mangNV) {
        //trung ma nhan vien tra ve true
        var exist = mangNV.some(function (item) {
            return inputVal === item.maNV;
        });

        if (exist) {
            //khong hop le
            getEle(spanID).style.display = "block";
            getEle(spanID).innerHTML = message;
            return false;
        }
        //hop le
        getEle(spanID).style.display = "none";
        getEle(spanID).innerHTML = "";
        return true;
    };

    this.kiemTraChuoi = function (inputVal, spanID, message) {
        var pattern = new RegExp(
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
        );

        if (pattern.test(inputVal)) {
            //hop le
            getEle(spanID).style.display = "none";
            getEle(spanID).innerHTML = "";
            return true;
        }

        //khong hop le
        getEle(spanID).style.display = "block";
        getEle(spanID).innerHTML = message;
        return false;
    };

    this.kiemTraEmail = function (input, spanID, message) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (input.match(mailformat)) {
            //hop le
            getEle(spanID).style.display = "none";
            getEle(spanID).innerHTML = "";
            return true;
        }
        //khong hop le
        getEle(spanID).style.display = "block";
        getEle(spanID).innerHTML = message;
        return false;
    };

    this.kiemTraChucVu = function (eleChucVu, spanID, message) {
        if (getEle(eleChucVu).selectedIndex !== 0) {
            //hop le
            getEle(spanID).style.display = "none";
            getEle(spanID).innerHTML = "";
            return true;
        }

        //khong hop le
        getEle(spanID).style.display = "block";
        getEle(spanID).innerHTML = message;
        return false;
    };

    this.kiemTraDoDaiKyTu = function (input, spanID, message, min, max) {
        if (input.length >= min && input.length <= max) {
            //hop le
            getEle(spanID).style.display = "none";
            getEle(spanID).innerHTML = "";
            return true;
        }

        //khong hop le
        getEle(spanID).style.display = "block";
        getEle(spanID).innerHTML = message;
        return false;
    };
}
