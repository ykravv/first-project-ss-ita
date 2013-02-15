var mainController = new MainController();
init = function() {
  
  mainController.init();
  menu_add();
  


  general_information.addEventListener("click", function(){ mainController.saveTabDataToCard(1) ;} , false);
  passport_data.addEventListener("click", function(){ mainController.saveTabDataToCard(2) ;} , false);
  education_info.addEventListener("click", function(){ mainController.saveTabDataToCard(3) ;}, false);
  post_education_info.addEventListener("click", function(){ mainController.saveTabDataToCard(4) ;}, false);
  work_and_family.addEventListener("click", function(){ mainController.saveTabDataToCard(5) ;}, false);
  home_place.addEventListener("click", function(){ mainController.saveTabDataToCard(6) ;}, false);
  
  general_information.addEventListener("click", function(){ mainController.loadTabDataFromCard(1) ;} , false);
  passport_data.addEventListener("click", function(){ mainController.loadTabDataFromCard(2) ;} , false);
  education_info.addEventListener("click", function(){ mainController.loadTabDataFromCard(3) ;}, false);
  post_education_info.addEventListener("click", function(){ mainController.loadTabDataFromCard(4) ;}, false);
  work_and_family.addEventListener("click", function(){ mainController.loadTabDataFromCard(5) ;}, false);
  home_place.addEventListener("click", function(){ mainController.loadTabDataFromCard(6) ;}, false);
  
  

  button_preview.addEventListener("click", function(){ mainController.saveTabDataToCard() ;} , false);
  
  button_preview.addEventListener("click", mainController.renderPreview, false);
  edit.addEventListener("click", function(){ mainController.loadTabDataFromCard(1) ;} , false);

  //button_save.addEventListener("click", function(){ mainController.saveTabDataToCard(7) ;} , false);
  save.addEventListener("click", function(){ mainController.saveCardToDB() ;} , false);
  button_save.addEventListener("click", function(){ mainController.saveCardToDB() ;} , false);
}

window.onload = function() {
	init();
}

