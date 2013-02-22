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

  this.getCard = function(){
  	return data;
  }


  this.setCard = function(card) {
  	data = card;
  }
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
		"first_name":/^[А-Я]{1}[а-я]{1,20}$/,
		"last_name":/^[А-Я]{1}[а-я]{1,20}$/,
		"patronymic":/^[А-Я]{1}[а-я]{1,20}$/,
		"passport_series":/^[А-Я]{2}$/,
		"passport_number":/^\d{6}$/,
		"INN":/^\d{10}$/	
	};
	var prompt = {
		"first_name":"Имя должно начинаться с большой буквы. Только кириллица.",
		"last_name": "Фамилия должна начинаться с большой буквы. Только кириллица.",
		"patronymic": "Отчество должно начинаться с большой буквы. Только кириллица.",
		"passport_series":"Серия паспорта - две заглавных кириллических буквы",
		"passport_number":"Номер паспорта - 6 цифр",
		"INN":"ИНН должен состоять из 10 цифр"	
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