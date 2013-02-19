<?php 

require_once 'facade.php';
/**
* Search Model
*/
class SearchModel
{
  
  public function searchCards($search_string)
  {
    $facade = new Facade();  
    $result_search = $facade->SearchCards($search_string);
    foreach ($result_search as $one) {
      


      // $education = $facade->getModel($one["id"], "education"); // id, table ??
      // $post_education = $facade->getModel($one["id"], "post_education"); 
      // $family = $facade->getModel($one["id"], "family"); 
    }
    return json_encode($result_search);
  }
}


?>