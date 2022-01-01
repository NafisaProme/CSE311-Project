create table doctor(id int, name varchar(50), password varchar(50));
insert into doctor values(1, 'Zia', 'Uddin'), (2, 'Nafisa', 'Prome');

create table patient(id int, fname varchar(100), lname varchar(100), phone int, email varchar(100), gender varchar(10), blood_group varchar(10), birth_date date, age int, occupation varchar(100), address varchar(200), password varchar(100));

insert into doctor values(null, 'Zia', 'Chowdhury', '01883434169', 'incredixia@gmail.com', 'Male', 'A+', '2000-02-08', '21', 'Neurology', 'Chittagong', 'Prome'),
    (null, 'Nafisa', 'Prome', '0123456789', 'nafisa@gmail.com', 'Female', 'O+', '2000-07-09', '21', 'Cardiology', 'Comilla', 'Zia'),
    (null, 'Tutul', 'Rahman', '0147852369', 'tutul@gmail.com', 'Male', 'B+', '2000-07-25', '21', 'Radiology', 'Barisal', 'dumdum'),
    (null, 'Noor', 'Joy', '0147852036', 'joy@gmail.com', 'Male', 'AB+', '1998-02-25', '23', 'Gynecology', 'Chittagong', 'zumzum'),
    (null, 'Ziana', 'Akther', '0123456789', 'ziana@gmail.com', 'Female', 'A-', '2002-09-05', '19', 'Anesthesiology', 'Chittagong', 'Simran'),
    (null, 'Asad', 'Zaman', '0159875321', 'asad@gmail.com', 'Male', 'B-', '1998-12-07', '24', 'Nephrology', 'Chittagong', 'Asadi')

        insert into patient values(null, 'Rifat', 'Chowdhury', '01633968033', 'incredixia@gmail.com', 'Male', 'A+', '2000-02-08', '21', 'Programmer', 'Chittagong', 'Prome'),
    (null, 'Nafisa', 'Ayman', '01633258974', 'prome@gmail.com', 'Female', 'O+', '2000-07-09', '21', 'Web Developer', 'Comilla', 'Zia'),
    (null, 'Touhidur', 'Rahman', '01590204450', 'tutul@gmail.com', 'Male', 'B+', '2000-07-25', '21', 'Football Coach', 'Barisal', 'dumdum'),
    (null, 'Abdun', 'Noor', '0147852369', 'noorjoy@gmail.com', 'Male', 'AB+', '1997-02-25', '24', 'Engineer', 'Chittagong', 'zumzum'),
    (null, 'Maisha', 'Amin', '01236589741', 'maisha@gmail.com', 'Female', 'A-', '2002-09-05', '19', 'Teacher', 'Dhaka', 'Ameen'),
    (null, 'Shahin', 'Alam', '0159874521', 'shahin@gmail.com', 'Male', 'AB-', '1998-12-07', '24', 'Painter', 'Mirsharai', 'Shaheen')

create table appointment(patient_id int, doctor_id int, patient_name varchar(100), doctor_name varchar(100), disease varchar(100), time_slot datetime);

