<?php
//Array associativo | Contiene i dati per connettersi al database 
$config = [
    'db_engine' => 'mysql',
    'db_host' => 'sql780.main-hosting.eu',
    'db_name' => 'u221049142_anagrafiche_pc',
    'db_user' => 'u221049142_pc',
    'db_password' => 'protezione_civile_5INF2',
];
//Salvo i dati necessari alla connesione in una variabile
$db_config = $config['db_engine'] . ":host=" . $config['db_host'] . ";dbname=" . $config['db_name'];
//Provo a connettermi al database
try {
    $pdo = new PDO($db_config, $config['db_user'], $config['db_password'], [
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
    ]);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
} catch (PDOException $e) {
    require_once("login.php");
    ReturnHome("Impossibile connettersi al database");
}
?>