function MainController() {

  var card = new Card();
  var controller_education = new EducationController(card.getValue("education_model"), 
                                                     card.getValue("post_education_model"));
  var controller_family = new FamilyController(card.getValue("family_model"));
  var previous_tab = 1;
  var actually_current_tab;

  this.getCard = function(){
    return  card.getCard();
  }  

  this.getf = function(){
    return controller_family;
  }
  
  this.init = function () {
    controller_education.init();
    controller_family.init();
  }


  this.saveTabDataToCard = function (current_tab) {

    var hash = controls_hash.value;
    current_tab = current_tab || actually_current_tab;
    hash = JSON.parse(hash);
		//card.clearErrorLog();
    for (controls in hash) {
      for (element in hash[controls][previous_tab]) {
        switch (controls) {
          case "inputs" : {
            card.setValue(hash[controls][previous_tab][element],
                          document.getElementById(hash[controls][previous_tab][element]).value);
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





  this.loadTabDataFromCard = function (current_tab) {
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

} 