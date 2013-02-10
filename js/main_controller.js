function MainController() {

  var card = new Card();
  var controller_education = new EducationController(card.getValue("education_model"), 
                                                     card.getValue("post_education_model"));
  var controller_family = new FamilyController(card.getValue("family_model"));
  var previous_tab = 1;
  var self_controller = this;

  this.getCard = function(){
    return  card;
  }  
  
  this.init = function () {
    controller_education.init();
    controller_family.init();
    self_controller.hash = {"inputs":{"1":[last_name, first_name, patronymic, day_birth, month_birth,
                                      year_birth, citizen, INN, sex, pasport_series, pasport_number, pasport_issued, date],
                                      "2":[education],
                                      "4":[last_job, job_degree, leave, pension, family],
                                      "5":[partmen, pasport_partmen] },
                          "checkboxes":{ "1":[army],
                                         "3":[aspirant, aduktur, doctor] },

                          "models" : { "2" : { "model" : "education_model", 
                                               "set" : controller_education.getEducationModel,
                                               "get" : controller_education.renderEducation },
                                       "3" : { "model" : "post_education_model", 
                                               "set" : controller_education.getPostEducationModel,
                                               "get" : controller_education.renderPostEducation },
                                       "4" : { "model" : "family_model", 
                                               "set" : controller_family.getFamilyModel,
                                               "get" : controller_family.renderFamily }
                          }
    }
  }


  this.saveTabDataToCard = function (current_tab) {

    //  var hash = $.parseJSON(input_hash.value);
    var hash = self_controller.hash;
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
            card.setValue(hash[controls][previous_tab]["model"],
                        hash[controls][previous_tab]["set"]());
            break;
        }

      }
    }

    previous_tab = current_tab;
  }





  this.loadTabDataFromCard = function (current_tab) {
    var hash = self_controller.hash;
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

  


/* В УТИЛЬ */
  this.render_preview = function () {
    var inputs_ch_key = ["army", "aspirant", "aduktur", "doctor"];
    var inputs_key = ["r_last_name", "r_first_name", "r_patronymic", "day_birth", "month_birth", "r_year_birth",
      "citizen", "r_pasport_series", "r_pasport_number", "pasport_issued", "date",
      "education", "last_job", "job_degree", "leave", "pension", "family", "partmen", "pasport_partmen"];
    var inputs_ch = [army, aspirant, aduktur, doctor];
    var inputs = [p_last_name, p_first_name, p_patronymic, p_day_birth, p_month_birth, p_year_birth,
      p_citizen, p_pasport_series, p_pasport_number, p_pasport_issued, p_date,
      p_education, p_last_job, p_job_degree, p_leave, p_pension, p_family,
      p_partmen, p_pasport_partmen];


    for (var i = 0; i < inputs.length; i++) {
      curr = card.getValue(inputs_key[i]);
      if (curr !== undefined) {
        inputs[i].innerHTML = curr;
      }
    }


    for (var i = 0; i < inputs_ch.length; i++) {
      curr = card.getValue(inputs_ch_key[i]);
      inputs_ch[i].checked = curr;
    }


  }

}