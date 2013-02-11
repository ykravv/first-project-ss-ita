function MainController() {

  var card = new Card();
  var controller_education = new EducationController(card.getValue("education_model"), 
                                                     card.getValue("post_education_model"));
  var controller_family = new FamilyController(card.getValue("family_model"));
  var previous_tab = 1;
  //var self_controller = this;

  this.getCard = function(){
    return  card;
  }  
  
  this.init = function () {
    controller_education.init();
    controller_family.init();
  }


  this.saveTabDataToCard = function (current_tab) {

    var hash = controls_hash.value;
    hash = JSON.parse(hash);
		//card.clearErrorLog();
    for (controls in hash) {
      for (element in hash[controls][previous_tab]) {
        switch (controls) {
          case "inputs" :
            card.setValue(hash[controls][previous_tab][element].id,
                        hash[controls][previous_tab][element].value);
            break;
          case "checkboxes" :
            card.setValue(hash[controls][previous_tab][element].id,
                        hash[controls][previous_tab][element].checked);
            break;
          case "models" :
            card.setValue(hash[controls][previous_tab]["models"],
                        hash[controls][previous_tab]["set"]());
            break;
        }

      }
    }

    previous_tab = current_tab;
  }





  this.loadTabDataFromCard = function (current_tab) {
    var hash = controls_hash.value;
    hash = JSON.parse(hash);
    for (controls in hash) {
      for (element in hash[controls][current_tab]) {
        switch (controls) {
          case "inputs" :
            hash[controls][current_tab][element].value = card.getValue(hash[controls][current_tab][element].id) || "";
            break;
          case "checkboxes" :
            hash[controls][current_tab][element].checked = card.getValue(hash[controls][current_tab][element].id) || "";
            break;
          case "models" :
            //card.getValue(hash[controls][current_tab]["model"]); // TODP
            
            hash[controls][current_tab]["get"]();
            break;
        }

      }
    }

    
  }





/* to verify and bug fixing */
  this.render_preview = function () {
      var hash = controls_hash.value;
      hash = JSON.parse(hash);
      for (controls in hash) {
        for (element in hash[controls]) {
          for (page in hash[controls][element]) {
              elem_id = hash[controls][element][page].id;
    //          elem_id = elem_id.toString();
              elem_id = "p_"+elem_id;
              elem_id.value = card.getValue(hash[controls][element][page].id) || "";
              console.log(hash[controls][element][page].value);
              elem_id.checked = card.getValue(hash[controls][element][page].id) || "";
              //card.getValue(hash[controls][current_tab]["model"]); // TODP
          //    hash[controls][element]["get"]();
          }
        }
      }


  }

}