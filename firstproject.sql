-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 20, 2013 at 09:18 PM
-- Server version: 5.5.28
-- PHP Version: 5.3.10-1ubuntu3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `firstproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `cards`
--

CREATE TABLE IF NOT EXISTS `cards` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `last_name` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `patronymic` varchar(30) NOT NULL,
  `day_birth` int(2) NOT NULL,
  `month_birth` varchar(10) NOT NULL,
  `year_birth` int(4) NOT NULL,
  `citizen` varchar(30) NOT NULL,
  `INN` int(12) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `family` varchar(10) NOT NULL,
  `passport_series` tinyint(2) NOT NULL,
  `passport_number` varchar(6) NOT NULL,
  `passport_issued` text NOT NULL,
  `passport_date` varchar(10) NOT NULL,
  `passport_partmen` text NOT NULL,
  `partmen` text NOT NULL,
  `army` tinyint(1) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `education` varchar(50) NOT NULL,
  `aspirant` tinyint(1) NOT NULL,
  `aduktur` tinyint(1) NOT NULL,
  `doctor` tinyint(1) NOT NULL,
  `last_job` text NOT NULL,
  `job_degree` text NOT NULL,
  `leave_reason` text NOT NULL,
  `pension` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `cards`
--

INSERT INTO `cards` (`id`, `last_name`, `first_name`, `patronymic`, `day_birth`, `month_birth`, `year_birth`, `citizen`, `INN`, `sex`, `family`, `passport_series`, `passport_number`, `passport_issued`, `passport_date`, `passport_partmen`, `partmen`, `army`, `photo`, `education`, `aspirant`, `aduktur`, `doctor`, `last_job`, `job_degree`, `leave_reason`, `pension`) VALUES
(1, 'Иванов', '', '', 0, '', 0, '', 0, '', '', 0, '', '', '', '', '', 0, '', '', 0, 0, 0, '', '', '', ''),
(2, 'Иванченко', '', '', 0, '', 0, '', 0, '', '', 0, '', '', '', '', '', 0, '', '', 0, 0, 0, '', '', '', ''),
(6, 'Кравченко', 'Евгений', 'Васильевич', 30, 'cічень', 1991, 'украинец', 1234567890, 'Чоловіча', '', 0, '594343', '', '', '', '', 1, '', 'базова вища', 0, 0, 0, '', '', '', ''),
(7, 'Кравченко', 'Евгений', 'Васильевич', 1, 'cічень', 1991, 'украинец', 1234567890, 'Чоловіча', '', 0, '594334', '', '', '', '', 1, '', 'неповна вища', 0, 0, 0, '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE IF NOT EXISTS `education` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `card_id` int(11) NOT NULL,
  `institute` varchar(40) NOT NULL,
  `diplom` varchar(40) NOT NULL,
  `year` year(4) NOT NULL,
  `special` varchar(40) NOT NULL,
  `qualify` varchar(40) NOT NULL,
  `education_form` varchar(8) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `education`
--

INSERT INTO `education` (`id`, `card_id`, `institute`, `diplom`, `year`, `special`, `qualify`, `education_form`) VALUES
(1, 7, 'ДИИТ', '56455254', 2012, 'Защита', 'бакалавр', 'Денна'),
(2, 7, 'ДИИТ', '56452455', 2013, 'Защита', 'специалист', 'Денна');

-- --------------------------------------------------------

--
-- Table structure for table `family`
--

CREATE TABLE IF NOT EXISTS `family` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `family_status` varchar(10) NOT NULL,
  `card_id` int(11) NOT NULL,
  `full_name` varchar(60) NOT NULL,
  `year_birthday` year(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `family`
--

INSERT INTO `family` (`id`, `family_status`, `card_id`, `full_name`, `year_birthday`) VALUES
(1, 'мама', 5, 'Юля', 1968),
(2, 'папа', 5, 'Вася', 1968),
(3, 'мама', 6, 'Юля', 1968),
(4, 'папа', 6, 'Вася', 1968),
(5, 'сестра', 6, 'Катя', 2000);

-- --------------------------------------------------------

--
-- Table structure for table `post_education`
--

CREATE TABLE IF NOT EXISTS `post_education` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `card_id` int(11) NOT NULL,
  `institute_post` varchar(40) NOT NULL,
  `year_post` year(4) NOT NULL,
  `degree` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
