function searchTabs() {
   //search tab  
  this.searchFull = function ()  {
    var search_button = document.getElementById("extended_search");
    if(search_button.className === "not_active")
    {
      search_button.className = "active";
      document.getElementById("full_search").style.display = "block";
    }
    else
    {
      search_button.className = "not_active";
      document.getElementById("full_search").style.display = "none";
    }
  }
  
  this.clickAddCard = function ()  {
    document.getElementById("search_tab").style.display = "none";  
    document.getElementById("add_tab").style.display = "block";
  }
  
  this.clickSearchCard = function ()  {
    document.getElementById("search_tab").style.display = "block";
    document.getElementById("add_tab").style.display = "none";
  }
  
}