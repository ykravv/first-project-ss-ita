<?php
	
	//login ------ inspector
	//password --- project
	
	$enter = new Login();
	echo $enter->check($_POST['login'], $_POST['pass']);
	
	class Login
	{
		private $login;
		private $pass;
		private $response;
		public function check($login, $pass)
		{
			$this->login = $login;
			$this->pass = $pass;
			
			$send = new Facade();
			$result = $send->toDB($this->login, $this->pass);
			
			if($result)
				$this->response = true;	
			else
				$this->response = false;
				
			return $this->response;
		}
	}
	
	class Facade
	{ 
		public function toDB($login, $pass) 
		{
			$connect = mysql_connect("localhost", "root");
			
			mysql_select_db('login', $connect) || 
				die ('Can\'t use date base : '. mysql_error());
			$sql = "SELECT * FROM log_DB";
			$result = mysql_query($sql) or die(mysql_error());
				
			while ($row = mysql_fetch_assoc($result))
			{
				$db_log = $row['login'];
				$db_pass = $row['pass'];
			}
			
			if ($db_log != $login || $db_pass != $pass) 
				$result = false;
			else
				$result = true;
		
			mysql_close($connect);
			
			return $result;
		}
	}
?>