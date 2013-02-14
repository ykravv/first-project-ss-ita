/**
* Creates an instance of Facade.
*
* @constructor
* @this {Facade} 
*/
function Facade() {
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
	var uri = "backend/server.php",				//<-------SERVER URI!
		ajax = new AjaxObject();	
				
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4) 
				console.log(ajax.responseText);
		};
		
		ajax.open("POST", uri, true);
		ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		ajax.send("data=" + hash);	
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