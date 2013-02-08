function Education(model) {
    
  /* Передаваемый параметр model - модель таблицы в общей модели карточки
  * Это массив хешей, каждый хеш - строка таблицы.  */
  
  this.add_education = function(education) {
    model.push(education);
  }
    
  this.to_html = function(){
    /* Формирование таблицы html из модели */
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
  
  
  this.extended_to_html = function(){
    
    var html = ["", ""];
    var count = 0;
    
    model.forEach(function(elem, key) {
      html[0] += "<tr>";
      html[1] += "<tr>";
      for (property in elem) {
        if(count < 3){
          html[0] += "<td>" + elem[property] + "</td>";
        } else {
          html[1] += "<td>" + elem[property] + "</td>";
        }
        count++;
      }
      html[0] += "</tr>";
      html[1] += "</tr>";
    });
    
    
    return html;
  } 
    
  return this;
}


