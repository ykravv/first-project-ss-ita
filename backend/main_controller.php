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
    
    $this->education = new Card($object->education_model, "education");
    $this->post_education = new Card($object->post_education_model, "post_education");
    $this->family = new Card($object->family_model, "family");
    
    unset($object->education_model);
    unset($object->post_education_model);
    unset($object->family_model);

    $this->card = new Card($object, "cards");
    
    switch ($action) {
      case 'save': {
          $this->createCard();
        break;
      }
    }

    echo $this->response;
  }

  public function createCard()
  {
    if ($this->card->isValid()) {
      $this->response = $this->saveCardToDB();
      } else {
        # вернуть сообщение об ошибке 
        $this->response = "incorrect data";
      }

  }

  public function saveCardToDB() {
    $result_query = $this->card->save();
    
    if ($result_query["status"] === "ok"){
      
      $this->family->SetCardId($result_query["id"]);
      $this->education->SetCardId($result_query["id"]);
      $this->post_education->SetCardId($result_query["id"]);
      
      $this->family->save();
      $this->education->save();
      $this->post_education->save();
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