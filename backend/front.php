<?
  class Front {
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
    public function __construct($hash_array, $name_table)
    {
      $this->host = "localhost";
      $this->bdname = "firstproject";
      $this->user = "root";
      $this->password = "password";

      try
      {
        $this->db = new PDO('mysql:host='.$this->host.';dbname='.$this->bdname,$this->user,$this->password);
        $this->db->exec("SET NAMES utf8");
        $this->hash_array = $hash_array;
        $this->name_table = $name_table;
      }
      catch(PDOException $e)
      {
        return false;
      }    
      return true;
    }


    public function create()
    {
      $array;
      try{  
          if($this->name_table=="cards")
          {
            $query = "INSERT INTO `".$this->name_table."` SET ";
           
            foreach($this->hash_array as $key=>$value )
            {
              $query = $query.$key."='".$value."'".",";
            }  
            $query = substr($query, 0, strlen($str)-1);
            
            echo "QUERY: ".$query."\n";
            $this->create = $this->db->prepare($query);
            $this->create->execute();
            $this->id = $this->db->lastInsertId();
            echo "id".$this->id."\n";
          }
          else
          {
            //TODO: создать запрос если массив!
            $i=0;

            foreach($this->hash_array as $one)
            {
              echo "HASh oBJ:\n";
              var_dump($one);
              $query = "INSERT INTO `".$this->name_table."` SET ";
              
              foreach($one as $key=>$value )
              { 
                $query = $query.$key."='".$value."'".",";
              }  
              
              $query = substr($query, 0, strlen($str)-1);
              echo "QUERY2: ".$query."\n";
              die();
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
      var_dump($array);
      return $array;
      
    }
    public function update()
    {
      $this->update = $this->db->prepare("");
      $this->update->execute();
    }
    public function read()
    {
      $this->read = $this->db->prepare("SELECT * FROM `".$this->name_table."`");
    /*  $result= array();
      $this->read->execute();
      while($row = $this->read->fetch())
      {
        $result .= $row["id"].$row["name"].$row["author"];
      }
      return $result;*/
    }
  }
?>