CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL
    AUTO INCREMENT,
    burger_name VARCHAR
    (255),
    devoured BOOLEAN false, 
    PRIMARY KEY
    (id));