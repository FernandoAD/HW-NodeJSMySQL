CREATE TABLE campus (
  id_campus INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
PRIMARY KEY (`id_campus`));

CREATE TABLE alumno (
  id_alumno INT NOT NULL AUTO_INCREMENT,
  id_campus INT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  matricula VARCHAR(10) NOT NULL,
  foto TEXT NOT NULL,
PRIMARY KEY (`id_alumno`));

CREATE TABLE materia (
  id_materia INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  clave VARCHAR(10) NOT NULL,
PRIMARY KEY (`id_materia`));

CREATE TABLE alumno_materia (
  id_alumno_materia INT NOT NULL AUTO_INCREMENT,
  id_alumno INT NOT NULL,
  id_materia INT NOT NULL,
PRIMARY KEY (`id_alumno_materia`));

Alter table alumno add Foreign Key (id_campus) references campus (id_campus) on delete  restrict on update  restrict;
Alter table alumno_materia add Foreign Key (id_alumno) references alumno (id_alumno) on delete  restrict on update  restrict;
Alter table alumno_materia add Foreign Key (id_materia) references materia (id_materia) on delete  restrict on update  restrict;

insert into campus(id_campus,nombre) values (1,'Campus Estado de Mexico');

insert into alumno(id_alumno,id_campus,nombre,matricula,foto) values (1,1,'Rick Sanchez','00954558','http://pm1.narvii.com/6545/8f765c17c81c456b0640a1513fa2d5862ac59c42_00.jpg');
insert into alumno(id_alumno,id_campus,nombre,matricula,foto) values (2,1,'Morty Smith','00954557','https://images.8tracks.com/cover/i/012/765/788/Eyepatchevilmorty-8791.jpg');
insert into alumno(id_alumno,id_campus,nombre,matricula,foto) values (3,1,'Jerry Smith','00954556','https://pbs.twimg.com/profile_images/738078769920020481/xpW4r-Tr_400x400.jpg');

insert into `materia`(`id_materia`,`nombre`,`clave`) values (1,'Laboratorio de Desarrollo de Aplicaciones Web','TC3052');
insert into `materia`(`id_materia`,`nombre`,`clave`) values (2,'Desarrollo de Aplicaciones Web','TC2026');
insert into `materia`(`id_materia`,`nombre`,`clave`) values (3,'Programacion Avanzada','TC2025');

insert into `alumno_materia`(`id_alumno_materia`,`id_alumno`,`id_materia`) values (1,1,1);
insert into `alumno_materia`(`id_alumno_materia`,`id_alumno`,`id_materia`) values (2,1,2);
insert into `alumno_materia`(`id_alumno_materia`,`id_alumno`,`id_materia`) values (3,1,3);
insert into `alumno_materia`(`id_alumno_materia`,`id_alumno`,`id_materia`) values (4,2,1);
insert into `alumno_materia`(`id_alumno_materia`,`id_alumno`,`id_materia`) values (5,2,2);
insert into `alumno_materia`(`id_alumno_materia`,`id_alumno`,`id_materia`) values (6,3,1);