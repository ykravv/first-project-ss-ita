<?php 

/**
* Server model for saving card
*/
class Card 
{	
	private params;

	function __construct($card = '')
	{
    if ($card) {
      $this->params = array(card["last_name"],
                            card["first_name"],
                            card["patronymic"],
                            card["day_birth"],
                            card["month_birth"],
                            card["year_birth"],
                            card["citizen"],
                            card["INN"],
                            card["sex"],
                            card["passport_series"],
                            card["passport_number"],
                            card["passport_issued"],
                            card["passport_date"], 
                            card["education"], 
                            card["last_job"], 
                            card["job_degree"],
                            card["leave"],
                            card["pension"],
                            card["family"], 
                            card["partmen"],
                            card["passport_partmen"], 
                            card["army"],
                            card["aspirant"],
                            card["aduktur"],
                            card["doctor"],
                            );
	  }   
  }


	/**
	* Функция сохранения карточки в базу данных
	*/
	function save(){

	}


  function read(){

  }

  
}


?>