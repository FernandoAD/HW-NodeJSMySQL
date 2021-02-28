'use strict';
const {
    query
} = require('express');
var mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "password",
    database: "alumnos_servicio"
});
const dbName = 'alumnos_servicio';

exports.obtener_estudiantes = function (req, res) {
    pool.getConnection((err, con) => {
        if (err) throw err;
        console.log("[obtener_estudiantes] Conectado a la base de datos...");
        con.query("select * from alumno", function (err, result) {
            6
            if (err) throw err;
            result = JSON.stringify(result);
            console.log("Result: " + result);
            con.destroy();
            res.end(result);
        });
    });
};

exports.obtener_estudiante = function (req, res) {
    pool.getConnection((err, con) => {
        if (err) throw err;
        console.log("[obtener_estudiante] Conectado a la base de datos...");
        var matriculaAlumno = req.params.matricula;
        con.query("select * from alumno where matricula = " + mysql.escape(matriculaAlumno), function (err,
            result) {
            if (err) throw err;
            result = JSON.stringify(result);
            console.log("Result: " + result);
            con.end((err) => {
                // Cerramos la conexion
            });
            res.end(result);
        });
    });
};

exports.agregar_estudiante = function (req, res) {
    pool.getConnection((err, con) => {
        if (err) throw err;
        console.log("[agregar_estudiante] Conectado a la base de datos...");
        var nuevoAlumno = req.body;
        con.query("insert into alumno set ?", nuevoAlumno, function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);
            con.end((err) => {
                // Cerramos la conexion
            });
            res.end();
        });
    });
};

exports.obtener_materias = function (req, res) {
    pool.getConnection((err, con) => {
        if (err) throw err;
        console.log("[obtener_materias] Conectado a la base de datos...");
        con.query("select * from materia", function (err, result) {
            6
            if (err) throw err;
            result = JSON.stringify(result);
            console.log("Result: " + result);
            con.destroy();
            res.end(result);
        });
    });
};

exports.obtener_materias_estudiante = function (req, res) {
    pool.getConnection((err, con) => {
        if (err) throw err;
        console.log("[obtener_materias_estudiante] Conectado a la base de datos...");
        var idAlumno = req.params.id;
        con.query("select * from alumno_materia where id_alumno = " + mysql.escape(idAlumno), function (err,
            result) {
            if (err) throw err;
            result = JSON.stringify(result);
            console.log("Result: " + result);
            con.end((err) => {
                // Cerramos la conexion
            });
            res.end(result);
        });
    });
};

exports.agregar_materia = function (req, res) {
    pool.getConnection((err, con) => {
        if (err) throw err;
        console.log("[agregar_materia] Conectado a la base de datos...");
        var nuevaMateria = req.body;
        con.query("insert into alumno_materia set ?", nuevaMateria, function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);
            con.end((err) => {
                // Cerramos la conexion
            });
            res.end();
        });
    });
};

exports.eliminar_materias = function (req, res) {
    pool.getConnection((err, con) => {
        if (err) throw err;
        console.log("[eliminar_materia] Conectado a la base de datos...");
        var idAlumno = req.body;
        con.query("delete from alumno_materia where id_alumno= ?", idAlumno, function (err, result) {
            console.log(query);
            if (err) throw err;
            console.log("Result: " + result);
            con.end((err) => {
                // Cerramos la conexion
            });
            res.end();
        });
    });
};