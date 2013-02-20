autoload("js/search_page/searchResult.js");
//TEST
/*var obj = new SearchController();
var array = new Array(["IIIIII","iiiiiiii","1111111111111"],["EEEEEEEEE","eeeeeeeeee","22222222222"],["AAAAAAA","aaaaaaaa","333333333"]);//need array
obj.viewListCards(array);*/
//--endTEST

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


  this.callback = function(data){
    console.log(data);
  }
  
  this.startExtendSearch = function (select_age, age, sex, army, educationLevel, select_education) {
    var param_arr = [select_age, age, sex, army, educationLevel, select_education];
    search.setAllCards(param_arr);
  }
  
  
  //view list of cards
  this.viewListCards = function(cards_array)  {
    var i, card_string;   
    var users = document.getElementById('users');
    
    i=0;
    for(object_card in cards_array)
    {   
      card_string=""; 
      var li = document.createElement("li");
      li.setAttribute ("id","card_"+i);
      for(key in cards_array[object_card])
      { 
        if(key<3)
        {
          //text of one card
          card_string += cards_array[object_card][key]+" ";          
        }
        else
          break;
      }
      li.innerHTML = card_string+"<br />";
      users.appendChild(li);
      i++;
    }
   }
  //list cards from model
  this.listCards = function()  {
    var cards_array = search.getAllCards;
    this.viewListCards(cards_array);
  }
  
}