/**
* Creates an instance of Facade.
*
* @constructor
* @this {Facade} 
*/
function Facade() {
	this.dataToserver = function (hash) {
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
	var url = "server.php",				//<-------SERVER URL!
		request = getXmlHttpRequest();	
				
		request.onreadystatechange = function () {
			if (request.readyState == 4) 
				alert(request.responseText);
		};
		
		request.open("POST", url, true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		request.send("data=" + hash + "&action=save" );	
}
/**
* Get object XmlHttpRequest
*
* @return {object}
*/
function getXmlHttpRequest() {
	if (window.XMLHttpRequest) {
		try {
			return new XMLHttpRequest();
		} catch (e){}
	} else  
		if (window.ActiveXObject) {
			try {
				return new ActiveXObject('Msxml2.XMLHTTP');
			} catch (e){}
			try {
				return new ActiveXObject('Microsoft.XMLHTTP');
			} catch (e){}
		} 
	return null;
}

