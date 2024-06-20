
/* 
MySQL SPs ( stored procedures )  provides a simple implementation by using which we can store many queries on the server.

ADVANTAGES:
-> Reduce network traffic -> No need to send lengthy queries to the server from the client side.
-> Database business logics are present in the database.
-> Database becomes more secure.
what is delimeter in sql;
which ternminate a query

How to set delimeter?
show tables ;
delimeter //
show tables //

HOW TO CREATE A PROCEDURE

Creating Stored Procedure
mysql> create procedure CreateUserTable()
    -> begin
    -> create table if not exits users(
    -> user_id int auto_increment primary key,
    -> first_name varchar(255),
    -> last_name varchar(255),
    -> city varchar(255)
    -> );
    -> insert into users(first_name,last_name,city) values ('Durgesh','Tiwari','Lucknow');
    -> insert into users(first_name,last_name,city) values('Ankit','Shukla','Delhi');
    -> select * from users;
    -> end //

Call Stored procedure:
call CreateUsreTbale();

Variables
 
Declare [variableName] dataType(size) [default value];
 
Set variableName=value;

and for more information visite the link : https://www.learncodewithdurgesh.com/course/videos-others/523

*/