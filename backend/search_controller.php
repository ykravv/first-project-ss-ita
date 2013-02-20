<?php 

require_once 'search_model.php';
/**
* Class SearchController for search cards
*/
class SearchController 
{
	
	public function __construct($search_string)
	{
    $result_search = $this->StartSearch($search_string);
    $this->SendResultToClient($result_search);
	}

  private function StartSearch($search_string)
  {
    $cards = new SearchModel(); 
    return $cards->searchCards($search_string);
  }

  private function SendResultToClient($data)
  {
    echo $data;
    return ;
  }

}

?>