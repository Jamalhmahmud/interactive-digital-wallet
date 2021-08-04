<?
require 'DbConnect.php';
	function submit($phNo,$amount){

	$conn =connect();
	$sql = $ conn-> prepare("INSERT INTO UEERS (phone,amount ) VALUES (?,?) ");
	$sql->blind_param("ss",$phone,$amount);
	return $sql -> execute();
	}
?>