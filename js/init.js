init = function() {
  menu_add();
  controller_education.init();
  controller_family.init();
  myCont.render_model();
  
  
  zagal_vidom.addEventListener("click", function(){ myCont.dataCollection(0) ;} , false);
  edu.addEventListener("click", function(){ myCont.dataCollection(1) ;}, false);
  post_edu.addEventListener("click", function(){ myCont.dataCollection(2) ;}, false);
	work_fam.addEventListener("click", function(){ myCont.dataCollection(3) ;}, false);
	place.addEventListener("click", function(){ myCont.dataCollection(4) ;}, false);
  preview.addEventListener("click", myCont.render_preview, false);
  edit.addEventListener("click", myCont.render_model, false);
}

window.onload = function() {
	init();
}

