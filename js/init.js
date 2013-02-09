var mainController = new MainController();
init = function() {
  
  mainController.init();
  menu_add();
  
  //myCont.render_model(); FOR DEMO EDIT MODEL - start rendering exist model
  
  
  zagal_vidom.addEventListener("click", function(){ myCont.saveTabDataToCard(1) ;} , false);
  edu.addEventListener("click", function(){ myCont.saveTabDataToCard(2) ;}, false);
  post_edu.addEventListener("click", function(){ myCont.saveTabDataToCard(3) ;}, false);
	work_fam.addEventListener("click", function(){ myCont.saveTabDataToCard(4) ;}, false);
	place.addEventListener("click", function(){ myCont.saveTabDataToCard(5) ;}, false);
  preview.addEventListener("click", myCont.render_preview, false);
  edit.addEventListener("click", myCont.render_model, false);
}

window.onload = function() {
	init();
}

