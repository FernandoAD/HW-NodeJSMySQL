'use strict';
module.exports = function (app) {
    var studentCollection = require('./studentCollectionController');
    app.route('/students')
        .get(studentCollection.obtener_estudiantes)
        .post(studentCollection.agregar_estudiante);
    app.route('/students/:matricula')
        .get(studentCollection.obtener_estudiante)
    app.route('/materias')
        .get(studentCollection.obtener_materias);
    app.route('/materias/:id')
        .get(studentCollection.obtener_materias_estudiante)
    app.route('/student')
        .post(studentCollection.agregar_materia);
    app.route('/delete')
        .post(studentCollection.eliminar_materias);
};