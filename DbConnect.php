<?php 
   function connect(){
   	$conn = new mysqli("localhost","jamal","1111","digital-wallet");
   	if($conn -> connect_errno){
   		 die("Database connection failed ...".$conn->connect_errno);
   	} 
   	return $conn;

   	}


?>
