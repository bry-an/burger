 DROP DATABASE IF EXISTS burgers_db;
 CREATE DATABASE burgers_db;

 USE xl8413m3fs52jct5;

 CREATE TABLE burgers (
     id INT NOT NULL AUTO_INCREMENT, 
     burger_name varchar(255), 
     devoured boolean, 
     PRIMARY KEY(id)
 );