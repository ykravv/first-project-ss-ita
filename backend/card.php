<?php 

  require_once "facade.php";
  
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
    $fasad_object = new Facade();
    return $fasad_object->createCard($this->card, $this->table, $this->card_id);
	}


  public static function ClearSubTables($card_id)
  {
    $facade = new Facade();
    $facade->ClearSubTables($card_id);
    unset($facade);
  }


  /**
  * Функция валидации данных
  */
 
  public function isValid(){
  

    $patterns = array('/^[А-Я]{1}[а-я]{1,15}$/u',
                      '/^[А-Я]{1}[а-я]{1,15}$/u',
                      '/^[А-Я]{1}[а-я]{1,15}$/u',
                      '/^[0-9]{1,4}$/',
                      '/^[А-Я]{2}$/u',
                      '/^\d{6}$/',
                      '/^\d{10}$/');

    $subjects = array($this->card->last_name,
                      $this->card->first_name,
                      $this->card->patronymic,
                      $this->card->year_birth,
                      $this->card->passport_series,
                      $this->card->passport_number,
                      $this->card->INN);

    

    for( $i = 0; $i < count($patterns); $i++){
      if (!preg_match($patterns[$i], $subjects[$i])) {
        return false; // invalid
      }
    }

    return true; // valid
  }


  
}


?>