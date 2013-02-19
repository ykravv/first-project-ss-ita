function MainController() {

    var card = new Card();

  var controller_education = new EducationController(card.getValue("education_model"), 
                                                     card.getValue("post_education_model"));
  var controller_family = new FamilyController(card.getValue("family_model"));
  var previous_tab = 1;
  var actually_current_tab;

  var self_controller = this;

  var cards_hash; //hash with array of all found cards
  
  this.init = function () {
    controller_education.init();
    controller_family.init();
  }



  this.saveTabToCard = function (current_tab) {

    var hash = controls_hash.value;
    current_tab = current_tab || actually_current_tab;
    hash = JSON.parse(hash);
    for_errors.innerHTML = card.clearErrorLog();
    for_errors.style.display = "none";
    for (controls in hash) {
      for (element in hash[controls][previous_tab]) {

            switch (controls) {
              case "inputs" : {
                if (card.isValid(hash[controls][previous_tab][element],
                      document.getElementById(hash[controls][previous_tab][element]).value)) {
                    card.setValue(hash[controls][previous_tab][element],
                              document.getElementById(hash[controls][previous_tab][element]).value);
                } else {
                    if ((current_tab == 7) || (current_tab != previous_tab)) {
                      for_errors.style.display = "block";
                      for_errors.innerHTML = card.getErrorLog();
                      for_errors.onclick = function () {for_errors.style.display = "none";}
                    }
                }
                break;
              }
              case "checkboxes" : {
                card.setValue(hash[controls][previous_tab][element],
                              document.getElementById(hash[controls][previous_tab][element]).checked);
                break;
              }
              case "models" : {
                switch (hash[controls][previous_tab]["model"]) {
                  case "education_model" : {
                    card.setValue("education_model",
                                  controller_education.getEducationModel());
                    break;
                  }
                  case "post_education_model" : {
                    card.setValue("post_education_model",
                                  controller_education.getPostEducationModel());
                    break;
                  }
                  case "family_model" : {
                    card.setValue("family_model",
                                  controller_family.getFamilyModel());
                    break;
                  }
                }

                break;
              }

            }


      }
    }

    previous_tab = current_tab;
  }





  this.loadTabFromCard = function (current_tab) {
    var hash = controls_hash.value;
    actually_current_tab = current_tab;
    hash = JSON.parse(hash);
    for (controls in hash) {
      for (element in hash[controls][current_tab]) {
        var id = hash[controls][current_tab][element];
        switch (controls) {
          case "inputs" :
            document.getElementById(id).value = card.getValue(id) || "";
            break;
          case "checkboxes" :
            document.getElementById(id).checked = card.getValue(id) || "";
            break;
          case "models" :
            switch (hash[controls][current_tab]["model"]) {
              case "education_model" : {
                controller_education.renderEducation(card.getValue("education_model"));
                break;
              } 
              case "post_education_model" : {
                controller_education.renderPostEducation(card.getValue("post_education_model"));
                break;
              }
              case "family_model" : {
                controller_family.renderFamily(card.getValue("family_model"));
                break;
              }
            }
            break;
        }

      }
    }

    
  }





/* to rewrite and bug fixing */
  this.renderPreview = function () {
      
    var hash = controls_hash.value;
    hash = JSON.parse(hash);
    for (controls in hash) {
      for (tabs in hash[controls]) {
        for (element in hash[controls][tabs]) {
          var id = hash[controls][tabs][element];
          if (card.getValue(id) != undefined && controls != "models") { 
            switch (controls) {
              case "inputs" : document.getElementById("p_"+id).innerHTML = card.getValue(id);
                break;
              case "checkboxes" : document.getElementById("p_"+id).checked = card.getValue(id);
                break;
            }
          }
        }
      }
    } 

    controller_education.renderEducation(card.getValue("education_model"));
    controller_education.renderPostEducation(card.getValue("post_education_model"));
    controller_family.renderFamily(card.getValue("family_model"));
  }


  this.saveCardToDB = function(){
    
    var facade = new Facade();
    facade.saveCard(card.getData());
  }


  //get Data from view and start searching
  this.startEasySearch = function () {
    //get data from input
    var fullname = search_fullname.value;
    //converting string from input to array
    var arr_fullname = fullname.split(" ");
    //create an instance of Facade
    var fasade_obj = new Facade ();
    //call Facade method with
    //@param {array}
    //@param {method of main_controller}
    fasade_obj.sendSearchRequest(arr_fullname[0],self_controller.callback);
  }


  this.getCardsFromModel = function() {
    autoload("searchResult.js");
    var searchResult = new SearchResult();
    this.cards_hash = searchResult.getAllCards();
  }

}

function autoload(src) {
  var script = document.createElement("script");
  script.setAttribute("src",src);
  document.getElementsByTagName("head")[0].appendChild(script);
}