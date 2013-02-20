<?php 

require_once 'facade.php';
/**
* Search Model
*/

class SearchModel
{
  
  public function SearchCards($search_string)
  {
    $facade = new Facade();  
    $result_search = $facade->SearchCards($search_string);
    foreach ($result_search as $one) {
      $card_id = $one["id"];
      $one["education_model"] = $facade->GetSubTable("education", $card_id);
      $one["post_education_model"] = $facade->GetSubTable("post_education", $card_id);
      $one["family_model"] = $facade->GetSubTable("family", $card_id);
    }
    return json_encode($result_search);
  }
}
?>