<?php

	require_once("main_controller.php");

	$json_string = $_REQUEST['data'];


	// $action = $_REQUEST['action'];
	$action = "save";
	
  $controller = new MainController($action, $json_string);


?>