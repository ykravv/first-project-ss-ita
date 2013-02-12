<?php 
require_once "card.php";
/**
* Фасадный класс со стороны сервера
*/
class MainController 
{

  private $card;

  public function __construct($action, $json){
    $this->createCard($action, json_decode($json));
  }

  public function createCard($action, $model_card)
  {
    switch ($action) {
      case 'save':
        $this->card = new Card($model_card);
        if ($this->card->isValid) {
          $this->saveCardToDB();
        } else {
          # вернуть сообщение об ошибке и послать обратно 
          # присладнный json для отображения данных в форме 
          this->getValidateError(); # TODO: Доделать выдачу
        }
        break;
      
      case 'search':
        $this->card = new Card($model_card); # model_card - объект содержащий параметры поиска
        $result = $this->readCardFromDB(); # результат запроса, должен быть отправлен на клиент
        break;
    }


    
  }

  public function saveCardToDB() {
    $this->card->save();  
  }

  public function readCardFromDB() {
    $this->card->read();
  }

}



?>