function Family(model) {
    
  this.addRelative = function(relative) {
    model.push(relative);
  }
  
  this.getModel = function() {
    return model;
  }
    
  this.toHtml = function(){
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


