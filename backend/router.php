<?php

	require_once "main_controller.php";
  require_once "search_controller.php"
	$data = $_REQUEST['data'];


	$action = $_REQUEST['action'];
	switch ($action) {
    case 'save':
      $controller = new MainController($action, $data); // $data - json string - Card
      break;
    
    case 'search':
      $controller = new SearchController($data); // $data - lastname for search
      break;
    
  }


?>