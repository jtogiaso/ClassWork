CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  -- TABLE CODE TO GO HERE
  `id` INT auto_increment primary key not null ,
  `author` VARCHAR(45),
  `chirp` VARCHAR(45),
  `time_created` DATETIME DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO `chirps` (`author` , `chirp`) 
VALUES ('C_LO' , 'Money Money Money Money.....Money!!!') ,
		('JT_$' , 'That\'s my catchphrase!') ,
		('C_LO' , 'You are not the one that I wanted...');

SELECT * FROM `chirps`;