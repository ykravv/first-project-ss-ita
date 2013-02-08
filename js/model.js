//Card model
function Card() {
	var date = {};

	this.setValue = function(key, value, target) {
		date[isValidate(key, value, target)] = value;
	}
	this.getValue = function(key) {
		return date[key];
	}
  
  this.get_card = function() { return date;}   
	return this;
}

//Validation Method
function isValidate(key, value, target) {
	var req_key = /^r_\w+$/i, 						//регуляр на ключ
		reg_full_name = /^[А-Я]{1}[а-я]{1,10}$/,	//регуляр на ФИО
		reg_year = /^[0-9]{1,4}$/, 					//регуляр на год рождения
		reg_pas_ser = /^[А-Я]{2}$/,
		reg_pas_num = /^\d{6}$/,
		reg_inn = /^\d{10}$/;
	
  /* FOR DEMO */
  if (target === "dont_validate") {
   return key; 
	}	
  /* === */
  
	if (req_key.test(key)) {
		switch (key) {
			case "r_first_name":
				if (!value || !reg_full_name.test(value)) {
					target.style.border = "2px solid red";
					target.value = "";
          console.log("Имя должно начинаться большой буквы и содержать только символы");
				} else {
					target.style.border = "";
					return key;	
				}
			break; 
			case "r_last_name":
				if (!value || !reg_full_name.test(value)) {
					target.style.border = "2px solid red";
					target.value = "";
          console.log("Фамилия должна начинаться большой буквы и содержать только символы");
				} else {
					target.style.border = "";
					return key;	
				}
			break;
			case "r_patronymic":
				if (!value || !reg_full_name.test(value)) {
					target.style.border = "2px solid red";
					target.value = "";
          console.log("Отчество должно начинаться большой буквы и содержать только символы");
				} else {
					target.style.border = "";
					return key;	
				}
			break;
			case "r_year_birth":
				if (!value || !reg_year.test(value)) {
					target.style.border = "2px solid red";
					target.value = "";
          console.log("Год рождения - число из 4 цифр");
				} else {
					target.style.border = "";
					return key;	
				}
			break;
			case "r_sex":
				if (!value) {
					target.style.border = "2px solid red";
          console.log("Пол необходимо выбрать");
				} else {
					target.style.border = "";
					return key;	
				}
			break;
			case "r_pasport_number":
				if (!value || !reg_pas_ser.test(value)) {
					target.style.border = "2px solid red";
					target.value = "";
          console.log("Номер паспорта - число из 6 цифр");
				} else {
					target.style.border = "";
					return key;	
				}
			break;
			case "r_pasport_series":
				if (!value || !reg_pas_num.test(value)) {
					target.style.border = "2px solid red";
					target.value = "";
          console.log("Серия пасспорта - две заглавные буквы");
				} else {
					target.style.border = "";
					return key;	
				}
			break;
			case "r_INN":
				if (!value || !reg_inn.test(value)) {
					target.style.border = "2px solid red";
					target.value = "";
          console.log("ИНН - число из 10 цифр");
				} else {
					target.style.border = "";
					return key;	
				}
			break;
			default:
				return key;	
		}
	} else {
		return key;	
	}
}

