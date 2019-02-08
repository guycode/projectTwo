DROP DATABASE IF EXISTS `timetables`;
CREATE DATABASE `timetables`;
USE `timetables`;


CREATE TABLE `allcharacters` (
	`id` Int() AUTO_INCREMENT NOT NULL,
	`date_value` DATE NOT NULL,
	`total_minutes` TIME NOT NULL,
	`category` VARCHAR( 255 ) NOT NULL,
	`goal` Int(100) NOT NULL,
	PRIMARY KEY ( `id` )
);