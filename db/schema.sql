CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burgers(
     id INTEGER AUTO_INCREMENT PRIMARY KEY,
     burger_name VARCHAR(50) NOT NULL,
     isDevoured BOOLEAN DEFAULT FALSE
);