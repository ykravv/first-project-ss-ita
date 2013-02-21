var log = new Login();

window.onload = function () {
	var show_result = new Show();
	
	submit.onclick = function () {
		log.enter(login_field.value, pass_field.value, show_result, show_result.callback);	
	}
	exit.onclick = function () {
		login.style.display = "block";
		help.style.display = "none";
		logout.style.display = "none";
		content.style.display = "none";
		login_field.value = "";
		pass_field.value = "";
	}
}

function Login() {
	this.enter = function (login, pass, obj, callback) {
	
		var uri = "server.php",				//<-------SERVER URI!
			ajax = new AjaxObject();	
				
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				obj.callback(ajax.responseText)
			}	
		};
		
		ajax.open("POST", uri, true);
		ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		ajax.send("login="+login+"&"+"pass="+pass);	
	}
	
}

function Show() {
	this.callback = function (response) {
		if (response) {
			login.style.display = "none";
			help.style.display = "none";
			logout.style.display = "block";
			content.style.display = "block"; 			// <---search page
			user.innerHTML = login_field.value;
		} else {
			help.style.display = "block";
			help.innerHTML = "Error";
			login_field.value = "";
			pass_field.value = "";	
		}
	}
	return this;
}

function AjaxObject() {
	var result;
	
	if (window.XMLHttpRequest) 
		result = new XMLHttpRequest();
	else  
		result =  new ActiveXObject('Microsoft.XMLHTTP');
	
	return result;
} 

