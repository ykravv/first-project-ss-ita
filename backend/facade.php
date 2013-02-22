<?


class Facade {
  private $hash_array;
  private $name_table;
  private $create;
  private $update;
  private $read;
  private $db;
  
  private $host;
  private $dbname;
  private $user;
  private $password;
  
  private $id;
  public function __construct()
  {
    // $this->host = "10.0.0.5";
    // $this->dbname = "uh182514_first";
    // $this->user = "uh182514_first";
    // $this->password = "password";

    $this->host = "localhost";
    $this->dbname = "firstproject";
    $this->user = "root";
    $this->password = "";

    try
    {
      $this->db = new PDO('mysql:host='.$this->host.';dbname='.$this->dbname,$this->user,$this->password);
      $this->db->exec("SET NAMES utf8");
      
    }
    catch(PDOException $e)
    {
      return false;
    }        
    return true;
  }


  public function createCard($hash_array, $name_table, $card_id = '')
  {
    $this->hash_array = $hash_array;
    $this->name_table = $name_table;
    $where_condition = '';

    try{  
        if($this->name_table=="cards")
        {
          $query = "INSERT INTO `".$this->name_table."` SET ";

          /* hack for updating card */

          if (isset($this->hash_array->id)) {
            $query = "UPDATE `".$this->name_table."` SET ";
            $where_condition = " WHERE id='" . $this->hash_array->id . "';";
            $this->id = $this->hash_array->id;
            unset($this->hash_array->id);
          }

          /**/            
          foreach($this->hash_array as $key=>$value )
          {
            $query = $query.$key."='".$value."'".",";
          }  
          $query = substr($query, 0, strlen($str)-1);
          $query .= $where_condition;
         
         
          $this->create = $this->db->prepare($query);
          $this->create->execute();
          
          /* FIX card_id for update subcard*/
          if ($lid = $this->db->lastInsertId()) {
            $this->id = $lid;
          }
          /**/
          
           
        }
        else
        {
          $i=0;

          foreach($this->hash_array as $one)
          {

            /* hack for updating card */

            if (isset($this->hash_array->id)) {
              unset($this->hash_array->id);
            }

            

            /**/    

            $query = "INSERT INTO `".$this->name_table."` SET ";
            
            foreach($one as $key=>$value )
            { 
              $query = $query.$key."='".$value."'".",";
            }  
            $query = $query."card_id='".$card_id."'".",";
            $query = substr($query, 0, strlen($str)-1);
           
            
            $this->create = $this->db->prepare($query);
            $this->create->execute();
            
            $i++;
          }
        }
      }
    catch(Exception $e)
    {
      return $array = array("status" => "error", "id" => null);
    }
    
    //array rezult
   
    $array = array("status" => "ok", "id" => $this->id);
     
    return $array;
    
  }


  public function SearchCards($search_string)
  {
         
    $query = "SELECT * FROM `cards` WHERE last_name LIKE '".$search_string."'";
    
      $this->read = $this->db->prepare($query);
      $this->read->execute();
      $result = array();
      while ($one = $this->read->fetch(PDO::FETCH_ASSOC)) {
        $result[] = $one;
      }

      return $result;
      
  }


  public function GetSubTable($table, $card_id)
  {
  
    $query = "SELECT * FROM `".$table."` WHERE card_id = '".$card_id."'";
      $this->read = $this->db->prepare($query);
      $this->read->execute();
      $result = array();
      
      while ($one = $this->read->fetch(PDO::FETCH_ASSOC)) {
        $result[] = $one;
      }
      return $result;
  }

  
  public function ClearSubTables($card_id)
  {
    $this->db->exec("DELETE FROM `family` WHERE card_id='".$card_id."';");
    $this->db->exec("DELETE FROM `education` WHERE card_id='".$card_id."';");
    $this->db->exec("DELETE FROM `post_education` WHERE card_id='".$card_id."';");
  }
}



?>