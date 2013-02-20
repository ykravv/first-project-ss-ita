autoload("js/search_page/searchResult.js");
//TEST
/*var obj = new SearchController();
var array = new Array();//need array
obj.viewListCards(array);*/
//--endTEST

function SearchController() {
	var search = new SearchResult(),
		search_result;
		
	self_controller = this;

  var search = new SearchResult();
  var cards_array;
  self_controller = this;

  this.startEasySearch = function () {
    var fasade_obj = new Facade(),
      fullname = search_fullname.value;
    
    //@param {array}
    //@param {method of main_controller}
    fasade_obj.sendSearchRequest(fullname, self_controller.callback);
  }


  this.callback = function(data){
    console.log(data);
  }
  //
  this.startExtendSearch = function () {
    var param_arr = [
					select_age.value, 			
					age.value,						
					select_sex.value, 
					search_army.value, 
					select_aducation.value, 
					select_aducationLevel.value
					];
    
	search_result = search.setFilterParam(param_arr);
  }
  
  
  //view list of cards
  this.viewListCards = function(cards_array)  {
    var i;        
    
    i=0;
    for(cards_array in object_card)
    {   
      for(object_card in key)
      { 
        var li = document.createElement("li");
        li.setAttribute ("id","card_"+i);
        //text of one card
        li.innerHTML = object_card[key];          
        users.appendChild(li);
      }
      i++;
    }
      /*
    var i,j;
    i=0;
    for(cards_array in object_card)
    {          
      j=0;
      
      foreach(object_card in card)
      { 
        foreach(card in key[value] )
        { 
                       
        }  
        j++;
      }  
      i++;
    }*/
  }
  //list cards from model
  this.listCards = function()  {
    var cards_array = search.getAllCards;
    this.viewListCards(cards_array);
  }
  
}