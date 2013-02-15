function EducationController(education_model, post_education_model){
  education_model = education_model || [];
  post_education_model = post_education_model || [];
  var self_education = this;
  var education_model = new Education(education_model);
  var post_education_model = new Education(post_education_model);
  
  this.init = function(){
    
    button_education.disabled = true; 
    button_post_education.disabled = true;

    button_education.addEventListener("click", self_education.addOneEducation, false);
    button_post_education.addEventListener("click", self_education.addOnePostEducation, false);
    
    controls_ed = document.getElementsByClassName("controls_education");
    for (var i = 0; i < controls_ed.length; i++){
       controls_ed[i].onchange = function() { self_education.checkValues("table_education"); }
	  }

    controls_post = document.getElementsByClassName("controls_post");
    for (var i = 0; i < controls_post.length; i++){
       controls_post[i].onchange = function() { self_education.checkValues("table_post"); }
    }
  }
  
  /* Добавление новой строки в таблицу и модель Образование */
  this.addOneEducation = function(){
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
    
    function inArray(val, arr) {
      for(var i = 0, l = arr.length; i < l; i++)  {
        if(arr[i] == val) {
            return true;
        }
      }
      return false;
    }
    
    education_model.addEducation(one_education);
    
    self_education.renderEducation();
   
    self_education.clearFields("table_education");
  }

  /* Добавление новой строки в таблицу и модель Последипломная подготовка */
  this.addOnePostEducation = function(){
    var tbl1 = post_education_table;
    var newrow = tbl1.insertRow(tbl1.rows.length - 1);
    var one_education = {"institute_post" : institute_post.value,
                         "year_post" : year_ending_post.value,
                         "degree" : acad_degree.value};
    
    post_education_model.addEducation(one_education);
    

    self_education.renderPostEducation();
    self_education.clearFields("table_post");
  }

  /* Получение моделей в виде объектов */
  this.getEducationModel = function(){
    return education_model.getModel();
  }
  
  this.getPostEducationModel = function() {
    return post_education_model.getModel();
  }
  /* */
  
  /* Проверка наличия всех заполненных инпутов перед добавлением в таблицу */ 
  this.checkValues = function(table){
    switch (table) {
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
  

  /* Очистка инпутов */
  this.clearFields = function(table) {
    
    switch (table) {
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

  /* Генерация таблиц из имеющихся моделей */  
  this.renderEducation = function() {
    var preview = preview_page.style.display === "block";
    var html = education_model.extendedToHtml();

    if (preview) {
      education_table_preview.tBodies[0].innerHTML = html[0];
      education_table2_preview.tBodies[0].innerHTML = html[1];  
    } else {
      education_table.tBodies[0].innerHTML = html[0]; 
      education_table2.tBodies[0].innerHTML = html[1];  
      self_education.init();
    }
  }

  this.renderPostEducation = function() {
    var preview = preview_page.style.display === "block";
    if (preview) {
       post_education_table_preview.tBodies[0].innerHTML = post_education_model.toHtml();
    } else {
      post_education_table.tBodies[0].innerHTML = post_education_model.toHtml();
      self_education.init();
    } 
    
  }
  /* */
}