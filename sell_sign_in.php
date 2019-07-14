<?php
    header("Content-Type: text/html; charset=utf-8;");

    //include("引用其他檔案")
    include("connmysql.php");

    //mysqli_select_db(判斷資料是否有傳入,"資料庫名稱")
    $seldb=@mysqli_select_db($db_link,"member");
    if(!$seldb){die("select error<br>");}

    //判斷是email還是phone number; (ID,EMAIL,PHONE,FIRSTNAME,LASTNAME,PASSWORD,BIRTHDAY,GENDER);用TRUNCATE TABLE customer重制id
    if(strpos($_POST['numbers'],"@")!==false){
        $sql_query = "INSERT INTO customer(id,email,phone,firstname,lastname,pass,birthday,gender)VALUES
        (NULL,'$_POST[numbers]',NULL,'$_POST[firstname]','$_POST[lastname]','$_POST[password]','$_POST[birthday]','$_POST[gender]')";
    }else if (ctype_digit($_POST['numbers'])){
        $sql_query = "INSERT INTO customer(id,email,phone,firstname,lastname,pass,birthday,gender)VALUES
        (NULL,NULL,'$_POST[numbers]','$_POST[firstname]','$_POST[lastname]','$_POST[password]','$_POST[birthday]','$_POST[gender]')";
    }else{
        //ajax 回報錯誤
    }

    if(mysqli_query($db_link,$sql_query)==1){
        //成功傳入資料庫
        header("Location: http://localhost/sell/log_in.html");
        exit;
    }
    else{
        header("Location:http://localhost/sell/sign_in.html");
        exit;
    }

?>