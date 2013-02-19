/**
* Creates an instance of Facade.
*
* @constructor
* @this {Facade} 
*/
function Facade() {

	var uri = "backend/router.php";

/**
* Send ajax-request for saving card
* 
*/
	this.saveCard = function (hash) {
		var ajax = new AjaxObject();	
			
		ajax.onreadystatechange = function () {
			if (ajax.readyState === 4 && ajax.status === 200) 
				alert(ajax.responseText);
		};
		
		ajax.open("POST", uri, true);
		ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		ajax.send("data=" + hash + "&action=save");	

	};

/**
* Send ajax-request for Search
* 
*/
	this.sendSearchRequest = function (last_name, callback) {
		var uri_extended;

		ajax = new AjaxObject();	
				
		ajax.onreadystatechange = function () {
			if (ajax.readyState === 4 && ajax.status === 200) 
				callback(ajax.responseText);
		};

		uri_extended = uri + "?action=search&data=" + last_name;
		ajax.open("GET", uri_extended, true);
		ajax.send();	
	};

	return this;
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