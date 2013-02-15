<?php 

  require_once "front.php";
  
/**
* Server model for saving card
*/
class Card 
{	
  private $hash_array;
  private $table;
  public $card_id;

	function __construct($object,$table)
	{
    $this->hash_array = $object;
    $this->table = $table;
    
    
  }
	/**
	* Функция сохранения карточки в базу данных
	*/
	public function save()
  {
    $fasad_object = new Front($this->hash_array,$this->table);
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

    $subjects = array($this->card->first_name,
                      $this->card->last_name,
                      $this->card->patronymic,
                      $this->card->year_birth,
                      $this->card->passport_series,
                      $this->card->passport_number,
                      $this->card->INN);

    for( $i = 0; $i < length($patterns)-1; $i++){
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