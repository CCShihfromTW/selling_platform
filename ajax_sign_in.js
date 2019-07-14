//validate; if JS is disable,this all won't work!!!!!!!!!!
emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

function validate(n) {
    const str = document.getElementsByName(n)[0].value;

    if (n === "first" || n === "last") {
        document.getElementById("msg").innerHTML = str;
        let zh = /^[^\u4e00-\u9fa5]+$/;//判斷是否都是中文(不能有中文)
        let en = /^[^a-zA-Z]*$/;//判斷是否都是英文(不能有英文)
        let num = /[0-9]/;//判斷是否有數字
        if (!zh.test(str) || !en.test(str)) {
            //符合姓名格式
            if (zh.test(str)) {
                document.getElementById("msg").innerHTML = "";
            } else if (en.test(str)) {
                document.getElementById("msg").innerHTML = "";
            } else {
                document.getElementById("msg").innerHTML = "姓名格式錯誤";
            }
        } else if (num.test(str)) {
            document.getElementById("msg").innerHTML = "姓名格式錯誤";
        } else {
            document.getElementById("msg").innerHTML = "請輸入正確的姓名";
        }
    } else if (n === "numbers") {
        if (str === '') {
            document.getElementById("msg").innerHTML = "";
        } else if (emailRule.test(str)) {
            //符合email格式
            return 1;
        } else if (parseInt(str) !== "NaN") {
            let regTel1 = /^(([0\ ]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(str);//帶區號的固定電話
            let regTel2 = /^(\d{7,8})(-(\d{3,}))?$/.test(str);//不帶區號的固定電話
            if (!regTel1 && !regTel2) {
                document.getElementById("msg").innerHTML = "請輸入正確的電話號碼或電子信箱";
            } else {
                //符合phone格式
                return 1;
            }
        }
    } else {
        document.getElementById("msg").innerHTML = n;
    }


}

function mouseoff(n) {
    for (let i = 0; i < n.length; i++) {
        document.getElementById("msg").innerHTML = "";
        validate(n[i]);
    }
}

