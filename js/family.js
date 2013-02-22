function Family(model) {
  /* Модель таблицы Семья */  
  
  var model = model;
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
      html = html + "<tr id='trfamily"+ key + "'>";
      for (property in elem) {
        html += "<td>" + elem[property] + "</td>";
      }
      html += '</tr>';
      
    });
   
    return html;
  }

  this.dropElement = function(offset) {
    model.splice(offset,1);
  } 

  this.getCount = function() {
    return model.length;
  }
    
  return this;
}


