autoload("js/search_page/searchResult.js");
function SearchController() {

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
    console.log(JSON.parse(data));
  }
  //
  this.startExtendSearch = function (select_age, age, sex, army, educationLevel, select_education) {
    var param_arr = [select_age, age, sex, army, educationLevel, select_education];
    search.setAllCards(param_arr);
  }
  
  //list cards from model
  this.listCards = function()  {
    this.cards_array = search.getAllCards;
 
  }
  //view list of cards
  this.viewListCards = function()  {
    var i,j;        
    var fragment="";
    
    var ul = document.getElementsByTagName("ul")[0]; // assuming it exists
    var docfrag = document.createDocumentFragment();
       
    this.cards_array.forEach(function(e){
                                      var li = document.createElement("li");
                                      li.textContent = e;
                                      docfrag.appendChild(li);
                                    });
       
      ul.appendChild(docfrag);
    
    /*i=0;
    for(this.cards_array in object_card)
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
}