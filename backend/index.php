<?php
header('Content-Type: text/html; charset=utf-8');
require_once("main_controller.php");

# FOR TESTING 
$json_string='{"last_name" : "Кравченко",
							 "first_name" : "Евгений",
							 "patronymic" : "Васильевич",
							 "day_birth" : "30",
							 "month_birth" : "01",
							 "year_birth" : "1991",
							 "citizen" : "украинец",
							 "pasport_series" : "АН",
							 "pasport_number" : "594343",
							 "education" : "Базова вища",
							 "partmen" : "Днепропетровск, улица Лазаряна, дом 2, общежитие 3, комната 18",
							 "army" : true,
							 "aspirant" : false,
							 "aduktur" : false,
							 "doctor" : false,
							 "family_model" : [{ "family_degree" : "Мама",
							 										 "PIB" : "Кравченко Юлия Владиславовна",
							 										 "year_birthday" : "1968" }, 
					 											 { "family_degree" : "Папа",
					 										     "PIB" : "Кравченко Василий Васильевич",
					 										     "year_birthday" : "1968" }, 
					 										   { "family_degree" : "Сестра",
					 										     "PIB" : "Кравченко Екатерина Васильевна",
					 										     "year_birthday" : "2000" } ]


							} ';
# End

$controller = new MainController();

$controller->createCard($json_string);


?>