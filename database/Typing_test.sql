CREATE DATABASE Typing_test;
USE Typing_test;


-- USER TABLE DETAILS --
CREATE TABLE user_details(
	id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(40) NOT NULL
);


-- TEST RECORD DETAILS --
CREATE TABLE test_record(
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    time_mode INT,
    accuracy DOUBLE,
    wpm_score FLOAT,
    test_time DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user_details (id)
);

DROP table user_details;
DROP table  test_record;

SELECT * from user_details;
SELECT * from test_record;

DELETE FROM user_details WHERE id = 2;
DELETE from test_record WHERE user_id = 2;

CREATE TABLE user_verification(
id INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(40) NOT NULL,
verifycode VARCHAR(6) NOT NULL
);

drop DATABASE typing_test;
CREATE USER 'localhost'@'%' IDENTIFIED BY '12345';
GRANT ALL PRIVILEGES ON *.* TO 'localhost'@'%' WITH GRANT OPTION;

show databases;

