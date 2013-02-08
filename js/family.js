function Family(model) {
    
  this.add_relative = function(relative) {
    model.push(relative);
  }
    
  this.to_html = function(){
    var html = "";
    
    model.forEach(function(elem, key) {
      html += "<tr>";
      for (property in elem) {
        html += "<td>" + elem[property] + "</td>";
      }
      html += "</tr>";
    });
    
    return html;
  } 
    
  return this;
}


