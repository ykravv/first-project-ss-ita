<?
  class Facade {
    private $hash_array;
    private $name_table;
    private $create;
    private $update;
    private $read;
    private $db;
    
    private $host;
    private $bdname;
    private $user;
    private $password;
    
    private $id;
    public function __construct()
    {
      // $this->host = "10.0.0.5";
      // $this->bdname = "uh182514_first";
      // $this->user = "uh182514_first";
      // $this->password = "password";

      $this->host = "localhost";
      $this->bdname = "firstproject";
      $this->user = "root";
      $this->password = "password";

      try
      {
        $this->db = new PDO('mysql:host='.$this->host.';dbname='.$this->bdname,$this->user,$this->password);
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
      $array;
      $this->hash_array = $hash_array;
      $this->name_table = $name_table;
      
      try{  
          if($this->name_table=="cards")
          {
            $query = "INSERT INTO `".$this->name_table."` SET ";
           
            foreach($this->hash_array as $key=>$value )
            {
              $query = $query.$key."='".$value."'".",";
            }  
            $query = substr($query, 0, strlen($str)-1);
            
             
            $this->create = $this->db->prepare($query);
            $this->create->execute();
            $this->id = $this->db->lastInsertId();
             
          }
          else
          {
            $i=0;

            foreach($this->hash_array as $one)
            {
               
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
      // TODO: 
      /* SQL to DB. Return array of rows */
      // Temp code. Поиск карточек по last_name. Возврат массива полученных записей 
      // через вызов ->fetchAll();

      $this->db->prepare("SELECT * FROM `cards` WHERE last_name LIKE ........");
    }

    public function GetSubTable($table, $card_id)
    {
      // TODO: $table - имя таблицы, 
      // Card_id - значение для условия ..WHERE card_id = $card_id
      // Метод для запроса из базы суб-табличек образования, семьи...
      // Возврат массива полученных записей через вызов ->fetchAll();
    }

    
  }
?>