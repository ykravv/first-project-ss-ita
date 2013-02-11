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

  public function createCard($json)
  {
    $this->card = new Card(json_decode($json));
  }

  public function saveCardToDB() {
    $this->card->save();  
  }

  public function readCardFromDB() {
    $this->card->read();
  }

}



?>