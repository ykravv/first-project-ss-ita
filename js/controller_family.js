var family_model = [];
                      
                      
var controller_family = new Controller_family(family_model);




function Controller_family(family_model){
  var self_family = this;
  var fam_model = new Family(family_model);
  
  this.init = function(){
    
    button_family.disabled = true; 

    button_family.addEventListener("click", self_family.add_relative, false);
    
    controls = document.getElementsByClassName("controls_family");
    for (var i = 0; i < controls.length; i++){
       controls[i].onchange = function() { self_family.check_values(); }
    }

    
  }
  


  this.add_relative = function(){
    
    var newrow = family_table.insertRow(family_table.rows.length - 1);
    var one_relative = {"family_degree" : family_degree.value,
                         "PIB" : PIB.value,
                         "year_birthday" : year_birthday.value};
    
    fam_model.add_relative(one_relative);
    
    for (key in one_relative) {
      newrow.insertCell(-1).innerHTML = one_relative[key];       
    }
    self_family.clear_fields();
  }

  
  
  this.check_values = function(){
    if ( family_degree.value && PIB.value && year_birthday.value ) {
      button_family.disabled = false;    
    } else {
      button_family.disabled = true;    
    }
  }
  


  this.clear_fields = function() {
    controls = document.getElementsByClassName("controls_family");
    for (var i = 0; i < controls.length; i++){
      controls[i].value = '';
    }
    button_family.disabled = true;
  } 

    
  
  this.render_family = function() {
    var preview = preview_page.style.display === "block";
    if (preview) {
      family_table_preview.tBodies[0].innerHTML = fam_model.to_html();
    } else {
      family_table.tBodies[0].innerHTML = fam_model.to_html();
    } 
    
  }
}