<?php 

require_once 'search_model.php';
/**
* Class SearchController for search cards
*/
class SearchController 
{
	
	public function __construct($search_string)
	{
    echo $result_search = $this->StartSearch($search_string);
	}

  private function StartSearch($search_string)
  {
    $cards = new SearchModel(); 
    return $cards->searchCards($search_string);
  }

}

?>