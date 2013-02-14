function menu_add(){
  document.onclick = function(e) {
  var e, is_need=0;
  var array_menu = new Array("general_information","passport_data","education_info","post_education_info","work_and_family","home_place");
  var array_blocks = new Array("tab1","tab2","tab3","tab4","tab5","tab6");
  
    e = e || window.event;
    var el = e.target || e.srcElement;
  
  for(key in array_menu)
  {
    if(el.id==array_menu[key])
      is_need=true;
  }
  if(is_need==true)
  {
    for(key in array_menu)
    {
      if(el.id==array_menu[key])
      {
        document.getElementById(array_menu[key]).className = "activ";
        document.getElementById(array_blocks[key]).style.display = "block";
      }
      else
      {
        document.getElementById(array_menu[key]).className = "not_activ";
        document.getElementById(array_blocks[key]).style.display = "none";
      }
    }
   }
} 
	
  document.getElementById("button_preview").onclick = function preview_script(){
      document.getElementById("border1").style.display="none";
      document.getElementById("preview_page").style.display="block";
      document.getElementById("save").disabled = true;
    }
    document.getElementById("edit").onclick = function (){
      document.getElementById("border1").style.display="block";
      document.getElementById("tab1").style.display = "block";
      document.getElementById("general_information").className = "activ";
      document.getElementById("home_place").className = "not_activ";
      for(var i=2;i<=6;i++)
        document.getElementById("tab"+i).style.display = "none";
      document.getElementById("preview_page").style.display="none";
      document.getElementById("save").disabled = true;
      mainController.renderPreview();
    }
    
   
          function injectSelect (sel, rowsObject) {
            var opt, x;
            sel.innerHTML = "";
            for (x in rowsObject) {
                opt = document.createElement("option");
                opt.value = x;
                opt.innerHTML = rowsObject[x];
                sel.appendChild(opt);
            }
        }
        function makeNumbersObject (from, to) {
            var result = {}, x;
            if(from > to) { 
                var z = from;
                from = to;
                to = z;
            }
            for (x = from; x <= to; x++) {
                result[x] = x;
            }
            return result
        }
        injectSelect(document.getElementById("month_birth"), {
            "Січень":"Січень", feb:"Лютий", mar:"Березень", apr:"Квітень", 
            may:"Травень", jun:"Червень", jul:"Липень", avg:"Серпень", 
            sep:"Вересень", okt:"Жовтень", nov:"Листопад", dec:"Грудень"
        }); 
        injectSelect(document.getElementById("year_birth"), makeNumbersObject(1920, 2012)); 
        injectSelect(document.getElementById("day_birth"), makeNumbersObject(1, 31));
    
    
}