/**
* Creates an instance of Card.
*
* @constructor
* @this {Card}
*
*/
function Card() {
	var data = {},
		errors = {},
		help = {},
		error_log = "";
	/**
	* Validation of the model.
	*
	* @param {string} key 
	* @param value
	* @return {boolean} 
	*/
	this.isValid = function(key, value) {
		if (validation(key, value, errors, help))
			return true;
		else 
			error_log += errors[key] + "---" + help[key] +"\n";	
	};
	/**
	* Clearing the error log
	*
	* @return empty string
	*/
	this.clearErrorLog = function() {
		return error_log = "";
	};
	/**
	* Get the log with errors
	*
	* @return {string} string with errors
	*/
	this.getErrorLog = function() {
		return error_log;	
	};
	/**
	* Entering data for storage
	*
	* @param {string} key
	* @param value
	*/
	this.setValue = function(key, value) {
		data[key] = value;		
	};
	/**
	* Getting values from storage
	*
	* @param {string} key
	* @return value
	*/
	this.getValue = function(key) {
		return data[key];
	};
	/**
	* Getting all data from storage
	*
	* @return {string}
	*/
	this.getData = function() {
		return JSON.stringify(data);
	};	
}

/**
* Method to validate for correct
*
* @param key
* @param value
* @param {object} errors
* @param {object} help
* @return {boolean} or fill object {errors} errors
*/
function validation(key, value, errors, help) {
  var required_keys = [
		"first_name", 
		"last_name",
		"patronymic",
		"pasport_series",
		"pasport_number",
		"INN"
	];
	var required_patterns = {
		"first_name":/^[A-Z]{1}[a-z]{1,10}$/,
		"last_name":/^[A-Z]{1}[a-z]{1,10}$/,
		"patronymic":/^[A-Z]{1}[a-z]{1,10}$/,
		"passport_series":/^[À-ß]{2}$/,
		"passport_number":/^\d{6}$/,
		"INN":/^\d{10}$/	
	};
	var prompt = {
		"first_name":"The name must begin with a capital letter",
		"last_name": "Last name must begin with a capital letter.",
		"patronymic": "Middle name must start with a capital letter.",
		"passport_series":"In a series of passport should be only two caps",
		"passport_number":"Passport number consists of 6 digits",
		"INN":"INN consists of 10 digits"	
	};
	
	if (inArray(key, required_keys)) {
		if (!value || !required_patterns[key].test(value)) {
			errors[key] = value;
			help[key] = prompt[key];;
		} else
			return true;
	} else
		return true; 
}

/**
* Check the keys in the array
*
* @param {string} key
* @param {array} arr
* @return {boolean}
*/
function inArray(key, arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == key) {
			return true;
		}
	}
	return false;
}	