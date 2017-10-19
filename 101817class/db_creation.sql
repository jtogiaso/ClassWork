DROP SCHEMA IF EXISTS `pop_quiz`;

CREATE SCHEMA `pop_quiz`;

USE `pop_quiz`;

DROP TABLE IF EXISTS `favorite_drinks_table`;

CREATE TABLE `favorite_drinks_table` (
	id int auto_increment primary key not null,
    drink_name varchar(25)
);

INSERT INTO `favorite_drinks_table` (`drink_name`) VALUES ('Tennessee Whiskey') , ('Gentelmen\'s Jack') , ('Crown Royal');
