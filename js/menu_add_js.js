function menu_add(){

	document.getElementById("zagal_vidom").onclick = function() {
		document.getElementById("punkt1").style.display = "block";
		
		document.getElementById("punkt2").style.display = "none";
		document.getElementById("punkt3").style.display = "none";
		document.getElementById("punkt4").style.display = "none";
		document.getElementById("punkt5").style.display = "none";
		
		document.getElementById("zagal_vidom").style.backgroundColor = "#4a7bb5";
		document.getElementById("edu").style.backgroundColor = "#73a5e7";
		document.getElementById("post_edu").style.backgroundColor = "#73a5e7";
		document.getElementById("work_fam").style.backgroundColor = "#73a5e7";
		document.getElementById("place").style.backgroundColor = "#73a5e7";
	}
	document.getElementById("edu").onclick = function() {
		document.getElementById("punkt2").style.display = "block";
		
		document.getElementById("punkt1").style.display = "none";
		document.getElementById("punkt3").style.display = "none";
		document.getElementById("punkt4").style.display = "none";
		document.getElementById("punkt5").style.display = "none";

		document.getElementById("zagal_vidom").style.backgroundColor = "#73a5e7";
		document.getElementById("edu").style.backgroundColor = "#4a7bb5";
		document.getElementById("post_edu").style.backgroundColor = "#73a5e7";
		document.getElementById("work_fam").style.backgroundColor = "#73a5e7";
		document.getElementById("place").style.backgroundColor = "#73a5e7";		
	}
	document.getElementById("post_edu").onclick = function() {
		document.getElementById("punkt3").style.display = "block";
		
		document.getElementById("punkt1").style.display = "none";
		document.getElementById("punkt2").style.display = "none";
		document.getElementById("punkt4").style.display = "none";
		document.getElementById("punkt5").style.display = "none";
		
		document.getElementById("zagal_vidom").style.backgroundColor = "#73a5e7";
		document.getElementById("edu").style.backgroundColor = "#73a5e7";
		document.getElementById("post_edu").style.backgroundColor = "#4a7bb5";
		document.getElementById("work_fam").style.backgroundColor = "#73a5e7";
		document.getElementById("place").style.backgroundColor = "#73a5e7";		
	}
	document.getElementById("work_fam").onclick = function() {
		document.getElementById("punkt4").style.display = "block";
		
		document.getElementById("punkt1").style.display = "none";
		document.getElementById("punkt2").style.display = "none";
		document.getElementById("punkt3").style.display = "none";
		document.getElementById("punkt5").style.display = "none";
		
		document.getElementById("zagal_vidom").style.backgroundColor = "#73a5e7";
		document.getElementById("edu").style.backgroundColor = "#73a5e7";
		document.getElementById("post_edu").style.backgroundColor = "#73a5e7";
		document.getElementById("work_fam").style.backgroundColor = "#4a7bb5";
		document.getElementById("place").style.backgroundColor = "#73a5e7";		
	}
	document.getElementById("place").onclick = function() {
		document.getElementById("punkt5").style.display = "block";
		
		document.getElementById("punkt1").style.display = "none";
		document.getElementById("punkt2").style.display = "none";
		document.getElementById("punkt3").style.display = "none";
		document.getElementById("punkt4").style.display = "none";
		
		document.getElementById("zagal_vidom").style.backgroundColor = "#73a5e7";
		document.getElementById("edu").style.backgroundColor = "#73a5e7";
		document.getElementById("post_edu").style.backgroundColor = "#73a5e7";
		document.getElementById("work_fam").style.backgroundColor = "#73a5e7";
		document.getElementById("place").style.backgroundColor = "#4a7bb5";		
	}
  document.getElementById("preview").onclick = function preview_script(){
      document.getElementById("border1").style.display="none";
      document.getElementById("preview_page").style.display="block";
      document.getElementById("save").disabled = true;
    }
    document.getElementById("edit").onclick = function (){
      document.getElementById("border1").style.display="block";
      document.getElementById("punkt1").style.display = "block";
      document.getElementById("zagal_vidom").style.backgroundColor = "#4a7bb5";
      document.getElementById("place").style.backgroundColor = "#73a5e7";	
      document.getElementById("punkt5").style.display = "none";
      document.getElementById("preview_page").style.display="none";
      document.getElementById("save").disabled = true;
      myCont.render_model();
    }
}