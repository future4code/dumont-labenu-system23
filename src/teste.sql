CREATE TABLE student (
id VARCHAR(50) NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
bday DATE NOT NULL
);

INSERT INTO student VALUES ("1", "Rodrigo", "rodrigo@gmail.com", "1985-01-25");
INSERT INTO student VALUES ("2", "Vanessa", "vanessa@gmail.com", "1988-10-22");
INSERT INTO student VALUES ("3", "Renata", "renata@gmail.com", "1987-04-12");


CREATE TABLE mission (
id VARCHAR(50) NOT NULL PRIMARY KEY,
name VARCHAR(40) NOT NULL,
start_date DATE NOT NULL,
end_date DATE NOT NULL,
module INT ,
user_id VARCHAR(50),
FOREIGN KEY (user_id) REFERENCES student(id)
);

CREATE TABLE teacher (
id VARCHAR(50) NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
bday DATE NOT NULL,
mission_id VARCHAR(50),
FOREIGN KEY (mission_id) REFERENCES mission(id)
);


SELECT * FROM student;
SELECT * FROM mission;
SELECT * FROM teacher;





##### DELETEI

DROP TABLE mission;

CREATE TABLE hobby (
id VARCHAR(50) NOT NULL PRIMARY KEY,
description TEXT NOT NULL,
user_id VARCHAR(50) NOT NULL,
FOREIGN KEY (user_id) REFERENCES student(id)
);

INSERT INTO hobby VALUES ("111", "Andar de bicileta", "1");
INSERT INTO hobby VALUES ("222", "Jogar games", "2");
INSERT INTO hobby VALUES ("333", "Praticar yoga", "3");

CREATE TABLE specialty (
id VARCHAR(50) NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL
);

CREATE TABLE teacher_specialty (
teacher_id VARCHAR(255) NOT NULL,
specialty_id VARCHAR(255) NOT NULL,
FOREIGN KEY (teacher_id) REFERENCES teacher(id),
FOREIGN KEY (specialty_id) REFERENCES specialty(id)
);

