<?php 

/**
* Server model for saving card
*/
class Card 
{	
	private $card;
  private $education;
  private $post_education;
  private $family;

	function __construct($card)
	{
    $this->card = $card;
    $this->education = $card->education;
    $this->post_education = $card->post_education;
    $this->family = $card->family;	 

  }


	/**
	* Функция сохранения карточки в базу данных
	*/
	public function save(){
    
	}

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

    for( $i = 1; $i < length($patterns); $i++){
      if (!preg_match($patterns[$i], subjects[$i])) {
        return false; # валидация не прошла
      }
    }

    return true; # валидация успешна
  }

  /**
  * Функция возврата списка ошибок.
  */

  // public function getValidateError(){

  // }

  /**
  * Option for future relise
  */ 
  public function read(){

  }

  
}


?>