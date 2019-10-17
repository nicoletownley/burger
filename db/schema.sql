CREATE DATABASE IF NOT EXISTS burger_db;

USE burger_db;
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (255) NOT NULL,
devoured BOOLEAN DEFAULT FALSE,
PRIMARY KEY (id)
);


INSERT INTO burgers (burger_name, devoured) VALUES ("Cheeseburger", False);
INSERT INTO burgers (burger_name, devoured) VALUES ("Hamburger", False);
INSERT INTO burgers (burger_name, devoured) VALUES ("Pizza Burger", False);


SELECT * FROM burgers;



