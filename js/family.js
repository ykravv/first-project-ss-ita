function Family(model) {
  /* Модель таблицы Семья */  
  
  /* Добавление новой строки-записи в модель */
  this.addRelative = function(relative) {
    model.push(relative);
  }
  
  /* Возврат модели в виде объекта для записи в модель Card */
  this.getModel = function() {
    return model;
  }
  
  /* Возврат содержимого модели в виде таблицы html */  
  this.toHtml = function(){
    var html = "";
    
    model.forEach(function(elem, key) {
      html += "<tr>";
      for (property in elem) {
        html += "<td>" + elem[property] + "</td>";
      }
      html += '</tr>';
      
    });
    html += '<tr><td><input class="controls_family" type="text" id="family_degree"></td>' ;
		html +=	'<td><input class="controls_family" type="text" id="PIB"></td>';
		html +=	'<td><input class="controls_family" type="text" id="year_birthday"></td></tr>';
    return html;
  } 
    
  return this;
}


