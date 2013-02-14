//Model Card
function Card() {
    var data = {},
		errors = {},
		error_log = "";
	
	this.isValid = function(key, value) {
		
		if (validation(key, value, errors))
			return true;
		else 
			error_log += key + "---" + errors[key] + "\n";	
	};
	this.clearErrorLog = function() {
		return error_log = "";
	};
	this.getErrorLog = function() {
		return error_log;	
	};
	this.setValue = function(key, value) {
		data[key] = value;		
	};
	this.getValue = function(key) {
		return data[key];
	};


    this.getCard = function() {
    return data;
}
}



//Validation Method
function validation(key, value, errors) {
	var req_key = /^r_\w+$/i, 						
		reg_full_name = /^[А-Я]{1}[а-я]{1,10}$/,	
		reg_year = /^[0-9]{1,4}$/, 					
		reg_pas_ser = /^[А-Я]{2}$/,
		reg_pas_num = /^\d{6}$/,
		reg_inn = /^\d{10}$/;
		
	if (req_key.test(key)) {
		switch (key) {
			case "r_first_name":
				if (!value || !reg_full_name.test(value)) 
					errors[key] = value;
				else
					return true;	
			break; 
        	case "r_last_name":
        		if (!value || !reg_full_name.test(value)) 
        			errors[key] = value;
        		else
        			return true;				
        	break;
        	case "r_patronymic":
                if (!value || !reg_full_name.test(value)) 
        			errors[key] = value;
        		else
        			return true;
            break;
            case "r_year_birth":
                if (!value || !reg_year.test(value)) 
        			errors[key] = value;
        		else
        			return true;				
            break;
            case "r_sex":
                if (!value) 
                    errors[key] = value;
        		else
        			return true;
            break;
            case "r_pasport_number":
                if (!value || !reg_pas_num.test(value)) 
        			errors[key] = value;
        		else
        			return true;				
            break;
            case "r_pasport_series":
                if (!value || !reg_pas_ser.test(value)) 
        			errors[key] = value;
        		else
        			return true;				
            break;
            case "r_INN":
                if (!value || !reg_inn.test(value)) 
        			errors[key] = value;
        		else
        			return true;				
            break;
        	
            default:
        		return true;
        }	
	}	
	else 
		 return true;
}