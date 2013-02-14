function Education(model) {
    
  /* Передаваемый параметр model - модель таблицы в общей модели карточки
  * Это массив хешей, каждый хеш - строка таблицы.  */
  
  /* Добавление нового элемента модели */
  this.addEducation = function(education) {
    model.push(education);
  }
    
  /* Возвращает модель в виде объекта */  
  this.getModel = function() {
    return model;
  }
  
  /* Возвращает модель в виде html-таблицы */
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
  
  /* Расширеный метод для преобразования модели в html-вид 
  * необходим для того, чтобы разбить модель "Образование" на 
  * физически две подтаблицы для корректного отображения на Виде */
  
  this.extendedToHtml = function(){
    
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
      count = 0;
      html[0] += "</tr>";
      html[1] += "</tr>";
    });
    
    
    
    return html;
  } 
    
  return this;
}


