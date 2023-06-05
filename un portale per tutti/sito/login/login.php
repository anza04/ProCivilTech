<?php

session_start();

if (isset($_POST['username']) && isset($_POST['password'])) {

    require_once('database.php');

    $username = $_POST['username'] ?? '';

    $password = $_POST['password'] ?? '';

    //Istruzioni SQL

    $query = "

            SELECT username, pw, IdCredenzialiPk

            FROM credenziali_utente

            WHERE username = :username

        ";

    $check = $pdo->prepare($query);

    $check->bindParam(':username', $username, PDO::PARAM_STR);

    //Esegue la query

    $check->execute();

    $user = $check->fetch(PDO::FETCH_ASSOC);

    if (!$user || (strcmp($password, $user['pw']) != 0) /*password_verify($password, $user['password']) === false*/)

        ReturnHome('Credenziali utente errate');

    //echo "<br><br><br>".var_dump(password_hash("5678",PASSWORD_ARGON2I)); 

    else {

        $_SESSION['session_id'] = session_id();

        $_SESSION['session_user'] = $user['username'];

        $_SESSION['user_id'] = $user['IdCredenzialiPk'];

        Tornato();
    }
} else if (isset($_SESSION['session_id']))

    Tornato();

else {

    echo ' <!doctype html>

<html lang="en">

<head>

    <meta charset="utf-8">

    <script src="https://www.google.com/recaptcha/api.js"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" crossorigin="anonymous">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="icon" href="../images/logo.png">

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <title>Area login | Protezione Civile</title>

    <style>

        html,

        body {

            height: 100%;



        }



        @font-face {

            font-family: LeagueSpartan-ExtraBold;

            src: url(../fonts/LeagueSpartan-ExtraBold.ttf);

        }



        @font-face {

            font-family: LeagueSpartan-Bold;

            src: url(../fonts/LeagueSpartan-Bold.ttf);

        }



        body {

            padding-top: 40px;

            padding-bottom: 40px;

            background-color: #006BB6;

        }





        .form-signin {

            width: 100%;

            height: 100%;

            max-width: 50%;

            max-height: 70%;

            padding: 15px;

            margin: auto;

        }



        .form-signin {

            font-weight: 400;

        }



        .form-signin .form-floating:focus-within {

            z-index: 2;

        }



        .form-signin input[type="email"] {

            margin-bottom: -1px;

            border-bottom-right-radius: 0;

            border-bottom-left-radius: 0;

        }



        .form-signin input[type="password"] {

            margin-bottom: 10px;

            border-top-left-radius: 0;

            border-top-right-radius: 0;

        }



        .btn {

            background-color: #FF6600;

            color: white;

        }



        a {

            color: white;

        }



        a:hover {

            color: #FF6600;

        }
        
        #g-recaptcha-response {
  display: block !important;
  position: absolute;
  margin: -78px 0 0 0 !important;
  width: 302px !important;
  height: 76px !important;
  z-index: -999999;
  opacity: 0;
}

    </style>

</head> ';

    echo

    "

    <a href=\"../index.php\"><button class=\"m-1 btn btn-lg position-absolute top-0 start-0\"><i class=\"fa fa-home\"></i></button></a>

    <body class=\"text-center\">

        <main class=\"form-signin\">

        <FORM NAME='LOGIN' ACTION=" . $_SERVER['PHP_SELF'] . " METHOD=POST>

        

            <img src=\"../images/logo.png\" class=\"mb-1\" width=\"84\" height=\"80\" />

                <h1 class=\"mb-3 fw-normal mt-3\" style=\"font-family: LeagueSpartan-ExtraBold; font-size: 48px; color: white;\">Area Riservata</h1>



<div class=\"form-floating mt-5\">

    <input type=\"name\" name=\"username\" class=\"form-control\" id=\"floatingInput\" placeholder=\"Username\" required>

    <label for=\"floatingInput\">Username</label>

</div>

<div class=\"form-floating mt-2\">

    <input type=\"password\" name=\"password\" class=\"form-control\" id=\"floatingPassword\" placeholder=\"Password\"required>

    <label for=\"floatingPassword\">Password</label>

</div>

<button class=\"w-100 btn btn-lg mt-2 btnAccedi\" style=\"font-family: 'LeagueSpartan-Bold'; line-height: 1.25; margin: 0 0 10px; font-weight: normal; font-size: 30px;\" class=\"g-recaptcha\" 

        data-sitekey=\"6LcWT04mAAAAAKKU4mMzrcdfa5k_VJnTpFvFAovp\" 

        data-callback='onSubmit' 

        data-action='submit' type=\"submit\">Accedi</button>
      <div class=\"g-recaptcha mt-2\" data-sitekey=\"6LcQR04mAAAAAK-Go-Dh8husI2GEM7DIN2B5Utka\" style=\"transform:scale(0.77);transform-origin:0 0\"></div>

<div class=\"form-floating mt-2\">

</div>

<p class=\"mt-5 mb-3\" style=\"color:white;\">Copyright &copy; 2023 Protezione Civile </p>

</form>

</main>

</body> 

 <script>

   function onSubmit(token) {

     document.getElementById(\"demo-form\").submit();

   }
 </script>";
}





function ReturnHome($msg)

{

    header("Refresh: 3; URL='login.php'");

    session_destroy();

    echo ' <!doctype html>

<html lang="en">

<head>

    <meta charset="utf-8">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" crossorigin="anonymous">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="icon" href="../images/logo.png">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Area login | Protezione Civile</title>

    <style>

        html,

        body {

            height: 100%;



        }



        @font-face {

            font-family: LeagueSpartan-ExtraBold;

            src: url(../fonts/LeagueSpartan-ExtraBold.ttf);

        }



        @font-face {

            font-family: LeagueSpartan-Bold;

            src: url(../fonts/LeagueSpartan-Bold.ttf);

        }



        body {

            padding-top: 40px;

            padding-bottom: 40px;

            background-color: #006BB6;

        }





        .form-signin {

            width: 100%;

            height: 100%;

            max-width: 50%;

            max-height: 70%;

            padding: 15px;

            margin: auto;

        }



        .form-signin {

            font-weight: 400;

        }



        .form-signin .form-floating:focus-within {

            z-index: 2;

        }



        .form-signin input[type="email"] {

            margin-bottom: -1px;

            border-bottom-right-radius: 0;

            border-bottom-left-radius: 0;

        }



        .form-signin input[type="password"] {

            margin-bottom: 10px;

            border-top-left-radius: 0;

            border-top-right-radius: 0;

        }



        .btn {

            background-color: #FF6600;

            color: white;

        }



        a {

            color: white;

        }



        a:hover {

            color: #FF6600;

        }

    </style>

</head> ';

    echo "<div class='col text-center'>

    <h1 class='class=' mb-3 fw-normal mt-3' style='font-family: LeagueSpartan-ExtraBold; font-size: 48px; color: white;'>$msg</h1><br><br><br>";

    echo "<h3 class='m-5 legends' style='font-family: LeagueSpartan-ExtraBold; color:#FF6600; font-size: 27px; text-shadow: 2px 2px 5px black;'><strong>Fra tre secondi verrai reindirizzato alla pagina di login</strong></h3>

</div>";

    //Torna alla home

    exit;
}



function Tornato()

{

    $session_user = htmlspecialchars($_SESSION['session_user'], ENT_QUOTES, 'UTF-8');

    $session_id = htmlspecialchars($_SESSION['session_id']);

    $infoUtente = explode(".", $session_user);

    echo ' <!doctype html>

<html lang="en">

<head>

    <meta charset="utf-8">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" crossorigin="anonymous">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="icon" href="../images/logo.png">

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Area login | Protezione Civile</title>

    <style>

        html,

        body {

            height: 100%;



        }



        @font-face {

            font-family: LeagueSpartan-ExtraBold;

            src: url(../fonts/LeagueSpartan-ExtraBold.ttf);

        }



        @font-face {

            font-family: LeagueSpartan-Bold;

            src: url(../fonts/LeagueSpartan-Bold.ttf);

        }



        body {

            padding-top: 40px;

            padding-bottom: 40px;

            background-color: #006BB6;

        }





        .form-signin {

            width: 100%;

            height: 100%;

            max-width: 50%;

            max-height: 70%;

            padding: 15px;

            margin: auto;

        }



        .form-signin {

            font-weight: 400;

        }



        .form-signin .form-floating:focus-within {

            z-index: 2;

        }



        .form-signin input[type="email"] {

            margin-bottom: -1px;

            border-bottom-right-radius: 0;

            border-bottom-left-radius: 0;

        }



        .form-signin input[type="password"] {

            margin-bottom: 10px;

            border-top-left-radius: 0;

            border-top-right-radius: 0;

        }



        .btn {

            background-color: #FF6600;

            color: white;

        }



        a {

            color: white;

        }



        a:hover {

            color: #FF6600;

        }

    </style>

</head> ';

    echo "<div class=\"text-center\" style=\"width:100%;\"><h2 class='fixed-top' style='color:#808080; text-shadow: 2px 2px 5px black;'>Benvenuto $infoUtente[1] <a href=\"logout.php\"><i class=\"fa fa-sign-out\"></i></a></h2></div>";

    echo

    "
      <div class=\"text-center\"> 
        <a href=\"../download/LocateMe.zip\" download>

            <button type=\"button\" class=\"m-5\"style=\"background-color: #FF6600; font-size: 27px; color: white; font-family: LeagueSpartan-ExtraBold;\"> <i class=\"bi bi-download\"></i> Download | LocateMe</button>

        </a>

    </div>
    <div class=\"text-center\">
    <img class=\"img-fluid mx-auto\" src=\"../images/login/qrcodeLocateMe.jpeg\" aria-hidden=\"true\" focusable=\"false\" width=\"250vh\" height=\"250vh\">
                    </img>
        </div>
     <div class=\"text-center\">
     
        <a href=\"https://civilalert.netlify.app/\" target=\"_blank\" rel=\"noopener noreferrer\">

            <button type=\"button\" class=\"m-5\"style=\"background-color: #FF6600; font-size: 27px; color: white; font-family: LeagueSpartan-ExtraBold;\"> <i class=\"bi bi-browser-chrome\"></i> WebApp | CivilAlert</button>

        </a>
</div>
    
   <div class=\"text-center\">
    <img class=\"img-fluid mx-auto\" src=\"../images/login/qrcodeCivilAlert.png\" aria-hidden=\"true\" focusable=\"false\" width=\"250vh\" height=\"250vh\">
                    </img>
                    </div>

    ";
}

echo "</html>";
