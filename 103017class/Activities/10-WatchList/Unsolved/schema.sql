CREATE DATABASE `movie_planner_db`;
USE `movie_planner_db`;

-- Create the table plans.
CREATE TABLE `movies`
(
`id` int NOT NULL AUTO_INCREMENT,
`movie` varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO `movies` (`movie`) VALUES ('Lion King') , ('Westworld') , ('The Temple Rose') , ('Scor');

SELECT * FROM `movies`;