<?php


require_once("class.blogdatabase.php");

$article = $_POST["articles"];


$db = new BlogDataBase();
$params = array($article);
$a = $db->selectQuery("select article from articles where name = ?" , $params);
//$a = $db->selectQuery("select article from blog where name = ?" , $params);
echo $a["article"];

?>