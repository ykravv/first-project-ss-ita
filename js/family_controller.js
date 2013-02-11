function FamilyController(family_model) {
  family_model = family_model || [];
  var self_family = this;
  var family_model = new Family(family_model);
  
  this.init = function(){
    
    button_family.disabled = true; 
    button_family.addEventListener("click", self_family.addRelative, false);
    
    controls = document.getElementsByClassName("controls_family");
    for (var i = 0; i < controls.length; i++){
       controls[i].onchange = function() { self_family.checkValues(); }
    }
  }
  

  /* Добавляет строку в таблицу */
  this.addRelative = function(){
    
    var newrow = family_table.insertRow(family_table.rows.length - 1);
    var one_relative = {"family_status" : family_status.value,
                         "full_name" : full_name.value,
                         "year_birthday" : year_birthday.value};
    
    family_model.addRelative(one_relative);
    
    for (key in one_relative) {
      newrow.insertCell(-1).innerHTML = one_relative[key];       
    }
    self_family.clearFields();
  }

  /* Получает модель Family */
  this.getFamilyModel = function() {
    return family_model.getModel();  
  }
  
  /* Проверка наличия всех заполненных инпутов перед добавлением в таблицу */ 
  this.checkValues = function(){
    if ( family_status.value && full_name.value && year_birthday.value ) {
      button_family.disabled = false;    
    } else {
      button_family.disabled = true;    
    }
  }
  

  /* Очистка инпутов */
  this.clearFields = function() {
    controls = document.getElementsByClassName("controls_family");
    for (var i = 0; i < controls.length; i++){
      controls[i].value = '';
    }
    button_family.disabled = true;
  } 

    
  /* Генерация таблицы из имеющейся модели */
  this.renderFamily = function() {
    var preview = preview_page.style.display === "block";
    if (preview) {
      //family_table_preview.tBodies[0].innerHTML = family_model.toHtml();
    } else {
      
      family_table.tBodies[0].innerHTML = family_model.toHtml();
      self_family.init();
    } 
    
  }
}