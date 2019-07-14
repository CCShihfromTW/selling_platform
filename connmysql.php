<?php
header("Content-Type: text/html; charset=utf-8");

//mysqli_connect("localhost","資料庫帳號","資料庫密碼")

$db_link = @mysqli_connect("localhost", "root", "");

//當連線資料庫是否成功時都會回傳true或false的值，所以用if來判斷

//@為抑制錯誤訊息

if (!$db_link) {

die("資料連結失敗<br>");

}
?>