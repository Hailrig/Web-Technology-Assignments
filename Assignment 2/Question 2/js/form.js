function validate(){
	let phoneTest = /^\d\d\d-\d\d\d-\d\d\d\d$/;
	let dOBTest = /^\d\d\d\d-\d\d-\d\d$/;
	let emailTest = /^\w+@\w+\.\w+$/;
	let errors = "";

	let name = document.forms["theForm"]["name"].value;
	let pNumber = document.forms["theForm"]["pNumber"].value;
	let email = document.forms["theForm"]["email"].value;
	let dOB = document.forms["theForm"]["dOB"].value;
	let gender = document.forms["theForm"]["gender"].value;

	if (name.length < 5 || name.length > 20){
		errors = errors + "Name is required and must be between 5 and 20 characters\n";
	}

	if(!phoneTest.test(pNumber)){
		errors = errors + "Phone number is a required field, must be written xxx-xxx-xxxx\n";
	}

	if(!emailTest.test(email)){
		errors = errors + "Email is a required field\n";
	}

	if(!dOBTest.test(dOB)){
		errors = errors + "Date of birth is a required field, must be written YYYY-MM-DD\n";
	}

	if (gender == ""){
		errors = errors + "Gender is a required field";
	}

	if (errors != ""){
		alert(errors);
		return false;
		errors = "";
	}
}