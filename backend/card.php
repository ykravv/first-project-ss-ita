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
  private $validateErrors;

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
    $patterns = array('/^[А-Я]{1}[а-я]{1,10}$/',);
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