function isValid(){
	var flag =true;
	var ToErr =document.getElementById("ToErr");
	var AmountErr =document.getElementById("AmountErr");
	var phone=document.forms["digital-wallet"]["phone"].value;
	var amount=document.forms["digital-wallet"]["amount"].value;
	ToErr.innerHTML="";
	AmountErr.innerHTML="";
	if(phone===""){

		flag=false;
		ToErr.innerHTML="Enter phone no pls";
	}
	if(amount===""){
		flag=false;
		AmountErr.innerHTML="Enter Amount Pls"
	}
 	return flag;
}

