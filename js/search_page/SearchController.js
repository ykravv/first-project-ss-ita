function SearchController() {
	var search = new SearchResult();
	
	self_controller = this;

	this.startEasySearch = function () {
		var fasade_obj = new Facade(),
			fullname = search_fullname.value;
		
		//@param {array}
		//@param {method of main_controller}
		fasade_obj.sendSearchRequest(fullname, self_controller.callback);
	}
	//
	this.startExtendSearch = function (/*params*/) {
	//params :
	//select_age, age, sex, army, educationLevel, select_education	
		var fasade_obj = new Facade(),
	fasade_obj.sendSearchRequest(/*params*/, self_controller.callback);
	}
}