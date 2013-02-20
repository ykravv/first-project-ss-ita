autoload("js/search_page/searchResult.js");
//TEST
/*var obj = new SearchController();
var array = new Array([{"id":"6","0":"6","last_name":"jjj","1":"iii","first_name":"ooo","2":"ppp","patronymic":"uuu","3":"nnn","day_birth":"30","4":"30","month_birth":"ooo","5":"c\u0456\u0447\u0435\u043d\u044c","year_birth":"1991","6":"1991","citizen":"\u0443\u043a\u0440\u0430\u0438\u043d\u0435\u0446","7":"\u0443\u043a\u0440\u0430\u0438\u043d\u0435\u0446","INN":"1234567890","8":"1234567890","sex":"\u0427\u043e\u043b\u043e\u0432\u0456\u0447\u0430","9":"\u0427\u043e\u043b\u043e\u0432\u0456\u0447\u0430","family":"","10":"","passport_series":"0","11":"0","passport_number":"594343","12":"594343","passport_issued":"","13":"","passport_date":"","14":"","passport_partmen":"","15":"","partmen":"","16":"","army":"1","17":"1","photo":"","18":"","education":"\u0431\u0430\u0437\u043e\u0432\u0430 \u0432\u0438\u0449\u0430","19":"\u0431\u0430\u0437\u043e\u0432\u0430 \u0432\u0438\u0449\u0430","aspirant":"0","20":"0","aduktur":"0","21":"0","doctor":"0","22":"0","last_job":"","23":"","job_degree":"","24":"","leave_reason":"","25":"","pension":"","26":""},
{"id":"7","0":"7","last_name":"hhh","1":"uuu","first_name":"xxx","2":"mmm","patronymic":"zzz","3":"ppp","day_birth":"1","4":"1","month_birth":"c\u0456\u0447\u0435\u043d\u044c","5":"c\u0456\u0447\u0435\u043d\u044c","year_birth":"1991","6":"1991","citizen":"\u0443\u043a\u0440\u0430\u0438\u043d\u0435\u0446","7":"\u0443\u043a\u0440\u0430\u0438\u043d\u0435\u0446","INN":"1234567890","8":"1234567890","sex":"\u0427\u043e\u043b\u043e\u0432\u0456\u0447\u0430","9":"\u0427\u043e\u043b\u043e\u0432\u0456\u0447\u0430","family":"","10":"","passport_series":"0","11":"0","passport_number":"594334","12":"594334","passport_issued":"","13":"","passport_date":"","14":"","passport_partmen":"","15":"","partmen":"","16":"","army":"1","17":"1","photo":"","18":"","education":"\u043d\u0435\u043f\u043e\u0432\u043d\u0430 \u0432\u0438\u0449\u0430","19":"\u043d\u0435\u043f\u043e\u0432\u043d\u0430 \u0432\u0438\u0449\u0430","aspirant":"0","20":"0","aduktur":"0","21":"0","doctor":"0","22":"0","last_job":"","23":"","job_degree":"","24":"","leave_reason":"","25":"","pension":"","26":""}]);
obj.viewListCards(array);*/
//--endTEST

function SearchController() {
 
  //var search = new SearchResult();
  self_controller = this;

  this.startEasySearch = function () {
    var fasade_obj = new Facade(),
      fullname = search_fullname.value;
    
    //@param {array}
    //@param {method of main_controller}
    fasade_obj.sendSearchRequest(fullname, self_controller.callback);
  }


  this.callbackSimpleSeach = function(data){
   // search.setAllCards(JSON.parse(data)); 
  }
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

  
  
  //view list of cards
  this.viewListCards = function(hash_array)  {
    var i, card_string, cards_array;   
    var users = document.getElementById('users');
        
    i=0;
    for(object in hash_array)
    {
      cards_array = hash_array[object];
      for(object_card in cards_array)
      {  
        card_string=""; 
        var li = document.createElement("li");
        li.setAttribute ("id","card_"+i);
       for(key in cards_array[object_card])
        {
            if(key=="first_name" || key=="last_name" || key=="patronymic")
            {
              //text of one card
              card_string += cards_array[object_card][key]+" ";          
            }
        }
        li.innerHTML = card_string+"<br />";
        users.appendChild(li);
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