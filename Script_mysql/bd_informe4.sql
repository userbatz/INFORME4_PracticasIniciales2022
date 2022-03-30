create database if not exists db_informe4;

use db_informe4;

create table Users(
Carnet int not null primary key,
Nombres varchar(50),
Apellidos varchar(50),
Contra varchar(50),
Email varchar(50),
Creditos int
);

describe Users;

create table Publicaciones (
Id_publi int not null auto_increment primary key,
Carnet_user int,
Tipo int,
Nombre varchar(50),
Mensaje varchar(200),
Fecha date
);

describe Publicaciones;



create table Cursos (
Id_curso int not null auto_increment primary key,
Nombre varchar(50),
Docente varchar(50),
Fecha date,
Creditos int
);

select * from db_informe4;

show tables;
