/**
* Creates an instance of Facade.
*
* @constructor
* @this {Facade} 
*/
function Facade() {

	var uri = "backend/router.php";


	this.dataToServer = function (hash) {
		send(hash);
	};
	return this;
}
/**
* Send ajax request with data 
*
* @param {string} 
*/
function send(hash) {
	
		ajax = new AjaxObject();	
				
		ajax.onreadystatechange = function () {
			if (ajax.readyState === 4 && ajax.status === 200) 
				alert(ajax.responseText);
		};
		
		ajax.open("POST", uri, true);
		ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		ajax.send("data=" + hash);	
}

/**
* Send ajax-request for Search
* 
*/
function sendSearchRequest (last_name, callback) {
	var uri_extended;

	ajax = new AjaxObject();	
			
	ajax.onreadystatechange = function () {
		if (ajax.readyState === 4 && ajax.status === 200) 
			callback(ajax.responseText);
	};
	
	uri_extended = uri + "?action=search&last_name=" + last_name;
	ajax.open("GET", uri_extended, true);
	ajax.send();	
}



/**
* Get object XmlHttpRequest
*
* @return {object}
*/
function AjaxObject() {
	var result;
	
	if (window.XMLHttpRequest) 
		result = new XMLHttpRequest();
	else  
		result =  new ActiveXObject('Microsoft.XMLHTTP');
	
	return result;
}