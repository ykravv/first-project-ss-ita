<?php 
require_once "card.php";
/**
* Серверный контроллер
*/
class MainController 
{

  private $card;
  private $education;
  private $post_education;
  private $family;

  private $response;

  public function __construct($action, $json){
    $object = json_decode($json);

    $this->education = new Card($object->education, "education");
    $this->post_education = new Card($object->post_education, "post_education");
    $this->family = new Card($object->family, "family");

    unset($object->education);
    unset($object->post_education);
    unset($object->family);

    $this->card = new Card($object, "card");

    switch ($action) {
      case 'save': {
          $this->createCard();
        break;
      }
    }
  }

  public function createCard()
  {
    if ($this->card->isValid) {
      $this->response = $this->saveCardToDB();

      } else {
        # вернуть сообщение об ошибке 
        $this->response = "incorrect data";
      }

      return $this->response;
  }

  public function saveCardToDB() {
    $result_query = $this->card->save();
    if ($result_query["status"] === "ok"){
      $this->education->card_id = $result_query["id"];
      $this->post_education->card_id = $result_query["id"];
      $this->family->card_id = $result_query["id"];

      $this->education->save();
      $this->post_education->save();
      $this->family->save();
    } else {
      return "Error inserting data";
    }

    return "Ok";
  }

  public function readCardFromDB() {
    #$this->card->read();
  }

}



?>