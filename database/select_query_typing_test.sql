USE Typing_test;

SHOW DATABASES;

SELECT * FROM user_details;

SELECT * FROM test_record;

-- SELECT STATEMENT --
SELECT u.name, t.time_mode, t.accuracy, t.wpm_score, t.test_time FROM test_record t
JOIN user_details u ON u.id = t.user_id
WHERE t.id = letest_test_id;

-- DEMO DATA --
INSERT INTO user_details (name) VALUES ('Sona'),('Mona');

INSERT INTO test_record (user_id , time_mode , accuracy , wpm_score , test_time ) 
VALUES ('1','3','4.5','20','2022-10-01 13:00:00') ,
('2','1','5.8','40','2022-02-01 01:00:00');

