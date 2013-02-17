<?php 

  require_once "front.php";
  
/**
* Server model for saving card
*/
class Card 
{	
  private $card; // hash object 
  private $table;
  private $card_id;

	function __construct($object,$table)
	{

   
    $this->card = $object;
    $this->table = $table;
    
    
  }

  public function SetCardId($value)
  {
    $this->card_id = $value;
  }


	/**
	* Функция сохранения карточки в базу данных
	*/
	public function save()
  { 
    
    $fasad_object = new Front($this->card,$this->table);
    return $fasad_object->create($this->card_id);
	}
  /**
  * Функция валидации данных
  */
 /**
  * Функция валидации данных
  */
  public function isValid(){

    $patterns = array('/^[А-Я]{1}[а-я]{1,15}$/',
                      '/^[А-Я]{1}[а-я]{1,15}$/',
                      '/^[А-Я]{1}[а-я]{1,15}$/',
                      '/^[0-9]{1,4}$/',
                      '/^[А-Я]{2}$/',
                      '/^\d{6}$/',
                      '/^\d{10}$/');

    $subjects = array($this->card->last_name,
                      $this->card->first_name,
                      $this->card->patronymic,
                      $this->card->year_birth,
                      $this->card->passport_series,
                      $this->card->passport_number,
                      $this->card->INN);

    echo $patterns["0"];
    echo "\n".$subjects["0"];
    echo preg_match($patterns["4"], "Сидор");die();

    for( $i = 0; $i < count($patterns)-1; $i++){
      if (!preg_match($patterns[$i], $subjects[$i])) {
        return false; # валидация не прошла
      }
    }

    return true; # валидация успешна
  }


  /**
  * Функция возврата списка ошибок.
  */
  public function getValidateError(){

  }

  /**
  * Option for future relise
  */ 
  public function read(){

  }

  
}


?>