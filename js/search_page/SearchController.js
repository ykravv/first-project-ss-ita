autoload("js/search_page/searchResult.js");

function SearchController() {
 
  //var search = new SearchResult();
  self_controller = this;

  this.startEasySearch = function () {
    var fasade_obj = new Facade(),
      fullname = search_fullname.value;
    
    //@param {array}
    //@param {method of main_controller}
    fasade_obj.sendSearchRequest(fullname, self_controller.callbackSimpleSearch);
  }


  this.callbackSimpleSearch = function(data){
   // search.setAllCards(JSON.parse(data)); 
    console.log(JSON.parse(data));
  }
<<<<<<< HEAD
  
  this.startExtendSearch = function (select_age, age, sex, army, educationLevel, select_education) {
    var param_arr = [select_age, age, sex, army, educationLevel, select_education];
    //search.setAllCards(param_arr);
  }
  //view for every card with its buttons
  this.appendNewItems = function(i, ul_id){
    var span = document.createElement("span");
    span.setAttribute ("id","buttons_wraper"+i);
    span.setAttribute ("class","buttons_wraper");
    ul_id.appendChild(span);
    var span_id = document.getElementById("buttons_wraper"+i);
    
    
    
    var button_edit = document.createElement("input");
    button_edit.setAttribute ("id","edit_button"+i);
    button_edit.setAttribute ("type","button");
    button_edit.setAttribute ("value","Докладніше");
    button_edit.setAttribute ("class","edit_button");
    button_edit.setAttribute ("name","edit");
    
    var button_preview = document.createElement("input");
    button_preview.setAttribute ("id","preview_button"+i);
    button_preview.setAttribute ("type","button");
    button_preview.setAttribute ("value","Редагувати");
    button_preview.setAttribute ("class","preview_button");
    button_preview.setAttribute ("name","preview");
    
    span_id.appendChild(button_edit);
    span_id.appendChild(button_preview);
  }
=======
  //
  this.startExtendSearch = function () {
    var param_arr = [
					select_age.value, 			
					age.value,						
					select_sex.value, 
					search_army.checked, 
					select_aducation.value, 
					select_aducationLevel.value
					];
    
	search_result = search.setFilterParam(param_arr);

  
>>>>>>> 4862ef88238164566686ebd33170ef9d3226bc86
  
  //view list of cards
  this.viewListCards = function(hash_array)  {
    var i, card_string, cards_array;   
    var ul_id = document.getElementById("users");
        
    i=0;
    for(object in hash_array)
    {
      cards_array = hash_array[object];
      for(object_card in cards_array)
      {  
        card_string=""; 
        var li = document.createElement("li");
        li.setAttribute ("id","card_"+i);
        li.setAttribute ("class","users");
        
        
       for(key in cards_array[object_card])
        {
            if(key=="first_name" || key=="last_name" || key=="patronymic" || key=="year_birth")
            {
              //text of one card
              card_string += cards_array[object_card][key]+" ";          
            }
        }
        li.innerHTML = card_string+"<br />";
        ul_id.appendChild(li);
        
        this.appendNewItems(i, ul_id);
        
        ul_id.innerHTML += "<br />";
        ul_id.innerHTML += "<br />";
        i++;
      }
    }
   }
  //list cards from model
  this.listCards = function()  {
    var cards_array = search.getAllCards;
    this.viewListCards(cards_array);
  }
  
}
}