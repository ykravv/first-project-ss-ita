var mainController = new MainController();
init = function() {
  
  mainController.init();
  menu_add();
  


  general_information.addEventListener("click", function(){ mainController.saveTabToCard(1) ;} , false);
  passport_data.addEventListener("click", function(){ mainController.saveTabToCard(2) ;} , false);
  education_info.addEventListener("click", function(){ mainController.saveTabToCard(3) ;}, false);
  post_education_info.addEventListener("click", function(){ mainController.saveTabToCard(4) ;}, false);
  work_and_family.addEventListener("click", function(){ mainController.saveTabToCard(5) ;}, false);
  home_place.addEventListener("click", function(){ mainController.saveTabToCard(6) ;}, false);
  
  general_information.addEventListener("click", function(){ mainController.loadTabFromCard(1) ;} , false);
  passport_data.addEventListener("click", function(){ mainController.loadTabFromCard(2) ;} , false);
  education_info.addEventListener("click", function(){ mainController.loadTabFromCard(3) ;}, false);
  post_education_info.addEventListener("click", function(){ mainController.loadTabFromCard(4) ;}, false);
  work_and_family.addEventListener("click", function(){ mainController.loadTabFromCard(5) ;}, false);
  home_place.addEventListener("click", function(){ mainController.loadTabFromCard(6) ;}, false);
  
  

  button_preview.addEventListener("click", function(){ mainController.saveTabToCard() ;} , false);
  
  button_preview.addEventListener("click", mainController.renderPreview, false);
  edit.addEventListener("click", function(){ mainController.loadTabFromCard(1) ;} , false);

  //button_save.addEventListener("click", function(){ mainController.saveTabDataToCard(7) ;} , false);
  save.addEventListener("click", function(){ mainController.saveCardToDB() ;} , false);
  button_save.addEventListener("click", function(){ mainController.saveCardToDB() ;} , false);
}

window.onload = function() {
	init();
}

