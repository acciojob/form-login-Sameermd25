function getFormvalue() {
    //Write your code here
	const fname=document.querySelector('input[name="fname"]').value;
	const lname=document.querySelector('input[name="lname"]').value;
	alert(fname+" "+lname);
	
	/*	or
	const form=document.forms["form1"];

	const firstName = form["fname"].value;
	const lastName = form["lname"].value;
	alert(firstName+" "+lastName);*/
}
