USE Typing_test;

-- INSERT QUERY FOR USER DETAILS --
INSERT INTO user_details (name) VALUES (?,?);


-- INSERT QUERY FOR TEST RECORDS --
INSERT INTO test_record (user_id , time_mode , accuracy , wpm_score , test_time ) 
VALUES (?,?,?,?,?);
