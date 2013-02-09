function Education_controller(education_model){
  var self_ed = this;
  var ed_model = new Education(education_model[0]);
  var post_model = new Education(education_model[1]);
  
  this.init = function(){
    
    button_education.disabled = true; 
    button_post_education.disabled = true;

    button_education.addEventListener("click", self_ed.add_one_education, false);
    button_post_education.addEventListener("click", self_ed.add_one_post_education, false);
    
    controls_ed = document.getElementsByClassName("controls_education");
    for (var i = 0; i < controls_ed.length; i++){
       controls_ed[i].onchange = function() { self_ed.check_values("table_education"); }
	  }

    controls_post = document.getElementsByClassName("controls_post");
    for (var i = 0; i < controls_post.length; i++){
       controls_post[i].onchange = function() { self_ed.check_values("table_post"); }
    }
  }
  
  this.add_one_education = function(){
    var tbl1 = education_table;
    var tbl2 = education_table2;
    var newrow_ed = tbl1.insertRow(tbl1.rows.length - 1);
    var newrow_post = tbl2.insertRow(tbl2.rows.length - 1);
    var one_education = {"institute" : institution.value, 
                         "diplom" : diploma.value,
                         "year" : year_ending.value,
                         "special" : specialty.value,
                         "qualify" : qvalify.value,
                         "education_form" : educational_form.value};
    var education_part1 = ["institute", "diplom", "year"];
    var education_part2 = ["special", "qualify", "education_form"];
    
    function in_array(val, arr) {
      for(var i = 0, l = arr.length; i < l; i++)  {
        if(arr[i] == val) {
            return true;
        }
      }
      return false;
    }
    
    ed_model.add_education(one_education);
    
    for (key in one_education) {
      if (in_array(key, education_part1)) {
        newrow_ed.insertCell(-1).innerHTML = one_education[key];       
      }
      
      if (in_array(key, education_part2)) {
        newrow_post.insertCell(-1).innerHTML = one_education[key];       
      }
    }
   
    self_ed.clear_fields("table_education");
  }


  this.add_one_post_education = function(){
    var tbl1 = post_education_table;
    var newrow = tbl1.insertRow(tbl1.rows.length - 1);
    var one_education = {"institute_post" : institute_post.value,
                         "year_post" : year_ending_post.value,
                         "degree" : acad_degree.value};
    
    post_model.add_education(one_education);
    
    for (key in one_education) {
      newrow.insertCell(-1).innerHTML = one_education[key];       
    }
    self_ed.clear_fields("table_post");
  }

  
  
  this.check_values = function(tabl){
    switch (tabl) {
      case "table_education": {
        if (institution.value && diploma.value && year_ending.value && 
            specialty.value && qvalify.value && educational_form.value ) {
          button_education.disabled = false;    
        } else {
          button_education.disabled = true;    
        }
        break;
      }
      
      case "table_post": {
        if (institute_post.value && year_ending_post.value && acad_degree.value ) {
          button_post_education.disabled = false;    
        } else {
          button_post_education.disabled = true;    
        }
        break;
      }
      
    }
  }
  


  this.clear_fields = function(tabl) {
    
    switch (tabl) {
      case "table_education": {
        inputs_ed = document.getElementsByClassName("controls_education");
        for (var i = 0; i < inputs_ed.length; i++){
          inputs_ed[i].value = '';
        }
        button_education.disabled = true;
        break;
      }
      
      case "table_post": {
        inputs_post = document.getElementsByClassName("controls_post");
        for (var i = 0; i < inputs_post.length; i++){
          inputs_post[i].value = '';
        }
        button_post_education.disabled = true;
        break;
      }
      
    }
  } 

    
  this.render_education = function() {
    var preview = preview_page.style.display === "block";
    var html = ed_model.extended_to_html();

    if (preview) {
      education_table_preview.tBodies[0].innerHTML = html[0];
      education_table2_preview.tBodies[0].innerHTML = html[1];  
    } else {
      education_table.tBodies[0].innerHTML = html[0];
      education_table2.tBodies[0].innerHTML = html[1];  
    }
  }

  this.render_post_education = function() {
    var preview = preview_page.style.display === "block";
    if (preview) {
      post_education_table_preview.tBodies[0].innerHTML = post_model.to_html();
    } else {
      post_education_table.tBodies[0].innerHTML = post_model.to_html();
    } 
    
  }
}