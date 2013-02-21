autoload("js/search_page/searchResult.js");

function SearchController() {  
  var id_actual = new Array();
  var search = new SearchResult();

  self_controller = this;
  
  this.startEasySearch = function () {
    var fasade_obj = new Facade(),
      fullname = search_fullname.value;
    
    //@param {array}
    //@param {method of main_controller}
    fasade_obj.sendSearchRequest(fullname, self_controller.callbackSimpleSearch);
  }

  this.callbackSimpleSearch = function(data){
    search.setAllCards(JSON.parse(data)); 
    self_controller.listCards();
  }
  
  //view for every found card with its buttons
  this.addEventButtons = function(num_foundCard){
    var edit_button_click = document.getElementById("edit_button"+num_foundCard);
    edit_button_click.addEventListener("click", function (){
                                                     self_controller.editFoundCard(num_foundCard, id_actual)
                                                   }, false);
                                             
    var preview_button_click = document.getElementById("preview_button"+num_foundCard);
    preview_button_click.addEventListener("click", function (){
                                                      self_controller.previewFoundCard(num_foundCard, id_actual)
                                                   }, false);
  }
    
  
  this.startExtendSearch = function () {
    var param_arr = [
					select_age.value, 			
					age.value,						
					select_sex.value, 
					search_army.checked, 
					select_aducation.value, 
					select_aducationLevel.value
					];
  users.innerHTML = "";  
	search_result = search.setFilterParam(param_arr);
  this.viewListCards(search_result);
}
  //edit found cards  
  this.editFoundCard = function(num_foundedCard, id_actualCard){  
    var full_card = search.getOneCard(id_actualCard[num_foundedCard]);
    mainController.initializationTransModel(full_card);
    mainController.loadTabFromCard(1);
    
    document.getElementById("edit").click();
}
  
  //preview found cards 
  this.previewFoundCard = function(num_foundedCard, id_actualCard){   
    var full_card = search.getOneCard(id_actualCard[num_foundedCard]);  
     mainController.initializationTransModel(full_card);
     mainController.renderPreview();
    
     document.getElementById("button_preview").click();
}
  //view list of cards
  this.viewListCards = function(hash_array)  {
    var i, card_string, cards_array;           
    i=0;
    for(object in hash_array)
    {
      cards_array = hash_array[object];
      
        card_string=""; 
        var template = document.getElementById("template");
        var result = template.innerHTML;
        result = result.replace('id="user_i"', 'id = "card_'+i+'"');
       
        id_actual[i] = cards_array["id"];
       for(key in cards_array)
        {
            if(key=="first_name" || key=="last_name" || key=="patronymic" || key=="year_birth")
            {
              //text of one card
              card_string += cards_array[key]+" ";        
            }
        }
        result = result.replace("USER_NAME", card_string);
        result = result.replace('id="edit_button"', 'id = "edit_button'+i+'"');
        result = result.replace('id="preview_button"', 'id = "preview_button'+i+'"');

        users.innerHTML = users.innerHTML  + result + "<br /><br />";   
        this.addEventButtons(i);
        i++;
      }
      
    }
   
  //list cards from model
  this.listCards = function()  {
    var cards_array = search.getAllCards();
    self_controller.viewListCards(cards_array);
  }

}

