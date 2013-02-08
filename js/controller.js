var myCont = new Controller();



function Controller() {
  
  var myCard = new Card();

  this.get_card = function(){
    return myCard;
  }  
	/* MODEL FOR DEMO */

    myCard.setValue("education_model", [ [{"institute" : "Днепропетровский нац. университет ж.д. транспорта", 
                                     "diplom" : "Бакалавр",
                                     "year" : "2012",
                                     "special" : "Защита информации в КС и сетях",
                                     "qualify" : "master",
                                     "education_form" : "Денна"}
                                    ], 
                                    [ {"institute_post" : "ДИИТ",
                                       "year_post" : "2012",
                                       "degree" : "спец"},
                                       {"institute_post" : "ДНУ",
                                       "year_post" : "2011",
                                       "degree" : "маг"}
                                    ] 
                                  ]); 
    myCard.setValue("family_model", [ {"family_degree" : "сестра",
                                 "PIB" : "Кравченко Екатерина Васильевна",
                                 "year_birthday" : "2000"},
                                 {"family_degree" : "отец",
                                 "PIB" : "Кравченко Василий Васильевич",
                                 "year_birthday" : "1968"},
                                 {"family_degree" : "мать",
                                 "PIB" : "Кравченко Юлия Владиславовна",
                                 "year_birthday" : "1968"} ]);

    myCard.setValue("r_last_name", "Kravchenko", "dont_validate");
    myCard.setValue("r_first_name", "Evgeny", "dont_validate");
    myCard.setValue("r_patronymic", "Vasilievich", "dont_validate");
    myCard.setValue("citizen", "ukraine", "dont_validate");
    myCard.setValue("r_pasport_series", "AN", "dont_validate");
    myCard.setValue("r_pasport_number", "594343", "dont_validate");
    myCard.setValue("education", "baze high", "dont_validate");
    myCard.setValue("day_birth", "30","dont_validate");
    myCard.setValue("month_birth", "01","dont_validate");
    myCard.setValue("r_year_birth", "1991","dont_validate");
    myCard.setValue("r_sex", "female","dont_validate");
    myCard.setValue("army", "true","dont_validate");
    myCard.setValue("partmen", "Dnepropetrovskaya obl, г. Днепропетровск, ул. \
    Лазаряна, дом 2, общежитие 3, комната 18.","dont_validate");
    myCard.setValue("pasport_partmen", "Днепропетровская область, г. Днепропетровск, ул. \
    Лазаряна, дом 2, общежитие 3, комната 18.","dont_validate");
/* === */

	this.dataCollection = function (prev_tab) {
	var hash_text = {"0" :[last_name,
													first_name,
													patronymic,
													day_birth,
													month_birth,
													year_birth,
													citizen,
													INN,
													sex,
													pasport_series,
													pasport_number,
													pasport_issued,
													date],
										"1" : [education,
													institution,
													diploma,
													year_ending,
													specialty,
													qvalify,
													educational_form],
										"2" : [institute_post,
													year_ending_post,
													acad_degree],
										"3" : [last_job,
													job_degree,
													leave,
													pension,
													family,
													family_degree,
													PIB,
													year_birthday],
										"4" : [partmen,
													pasport_partmen]};
	var hash_checkbox =	{"0":[army],
											 "2":[aspirant,
														aduktur,
														doctor]};
		for (cont in hash_text) {

			for (i in hash_text[cont]) {
				if (prev_tab == cont) { 
				console.log(hash_text[cont][i].id,hash_text[cont][i].value);
				myCard.setValue(hash_text[cont][i].id,hash_text[cont][i].value);
				}	
			}
		}	
		for (cont in hash_checkbox) {

			for (i in hash_checkbox[cont]) {
				if (prev_tab == cont) { 
				console.log(hash_checkbox[cont][i].id,hash_checkbox[cont][i].checked);
  			myCard.setValue(hash_text[cont][i].id,hash_text[cont][i].checked);
				}	
			}
		}	
	}
  
  this.render_model = function() {
    var inputs_key = ["r_last_name","r_first_name","r_patronymic","day_birth","month_birth","r_year_birth",
    "citizen","r_INN", "r_sex","r_pasport_series","r_pasport_number","pasport_issued","date",
		"education","last_job","job_degree","leave","pension","family", "partmen","pasport_partmen"];
    var inputs_ch = [army,aspirant,aduktur,doctor];
		var inputs_ch_key = ["army","aspirant","aduktur","doctor"];
  	var inputs = [last_name,first_name,patronymic,day_birth,month_birth,year_birth,
      citizen, INN, sex, pasport_series,pasport_number,pasport_issued,date,
  		education, last_job,job_degree,leave,pension,family,partmen,pasport_partmen];
      
       
    var curr;
    var controller_education = new Controller_education(myCard.getValue("education_model"));
    var controller_family = new Controller_family(myCard.getValue("family_model"));
    controller_education.render_education();
    controller_education.render_post_education();
    controller_family.render_family();
    
  	for (var i=0;i<inputs.length;i++) {
      curr = myCard.getValue(inputs_key[i]);
      if (curr !== undefined) {
        inputs[i].value = curr;  
      }
  	}
    
    for (var i=0; i<inputs_ch.length; i++) {
  		curr = myCard.getValue(inputs_ch_key[i]);
			inputs_ch[i].checked = curr; 
		}
  
  }   

  

  
  this.render_preview = function() {
    var inputs_key = ["r_last_name","r_first_name","r_patronymic","day_birth","month_birth","r_year_birth",
    "citizen","r_pasport_series","r_pasport_number","pasport_issued","date",
  	"education","last_job","job_degree","leave","pension","family", "partmen","pasport_partmen"];
    var inputs_ch = [army,aspirant,aduktur,doctor];
    var inputs = [p_last_name, p_first_name, p_patronymic,p_day_birth,p_month_birth,p_year_birth,
      p_citizen,p_pasport_series,p_pasport_number,p_pasport_issued,p_date,
  		p_education,p_last_job,p_job_degree,p_leave,p_pension,p_family,
      p_partmen,p_pasport_partmen]; 
      
    var controller_education = new Controller_education(myCard.getValue("education_model"));
    var controller_family = new Controller_family(myCard.getValue("family_model"));
    controller_education.render_education();
    controller_education.render_post_education();
    controller_family.render_family();
    
    for (var i=0;i<inputs.length;i++) {
      curr = myCard.getValue(inputs_key[i]);
      if (curr !== undefined) {
        inputs[i].innerHTML = curr;  
      }
    }
    
    
    
    
    
    for (var i=0; i<inputs_ch.length; i++) {
  		curr = myCard.getValue(inputs_ch_key[i]);
			inputs_ch[i].checked = curr; 
		}
    
    
  }

}