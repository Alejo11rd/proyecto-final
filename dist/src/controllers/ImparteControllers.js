"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getByAsi = exports.getByPro = exports.getById = exports.getAll = exports.create = void 0;
const db_1 = require("../../db");
const create = (imparte, callback) => {
    const queryString = 'INSERT INTO imparte (id_p, cod_a, grupo, horario) VALUES (?, ?, ?, ?)';
    console.log(imparte);
    db_1.db.query(queryString, [imparte.id_p, imparte.cod_a, imparte.grupo, imparte.horario], (err) => {
        if (err) {
            callback(err);
        }
        //const insertId = (<OkPacket>result).insertId;
        //callback(null, insertId);
        callback(null, {
            statusCode: 201,
            message: 'Imparticion creada exitosamente',
            data: {
                id_p: imparte.id_p,
                cod_a: imparte.cod_a,
                grupo: imparte.grupo
            }
        });
    });
};
exports.create = create;
const getAll = (callback) => {
    const queryString = 'SELECT * FROM imparte';
    db_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        const impartes = [];
        rows.forEach(row => {
            const imparte = {
                id_p: row.id_p,
                cod_a: row.cod_a,
                grupo: row.grupo,
                horario: row.horario,
            };
            impartes.push(imparte);
        });
        callback(null, {
            statusCode: 200,
            message: 'Imparticiones obtenidas exitosamente',
            data: impartes
        });
    });
};
exports.getAll = getAll;
const getById = (id_p, cod_a, grupo, callback) => {
    const queryString = 'SELECT * FROM imparte WHERE id_p = ? AND cod_a = ? AND grupo = ?';
    db_1.db.query(queryString, [id_p, cod_a, grupo], (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        if (row) {
            const imparte = {
                id_p: row.id_p,
                cod_a: row.cod_a,
                grupo: row.grupo,
                horario: row.horario,
            };
            callback(null, {
                statusCode: 200,
                message: 'Imparticion obtenida exitosamente',
                data: imparte
            });
        }
        else {
            callback(null, {
                statusCode: 404,
                message: 'Imparticion no encontrada'
            });
        }
    });
};
exports.getById = getById;
const getByPro = (id_p, callback) => {
    const queryString = 'SELECT * FROM imparte WHERE id_p = ? ';
    db_1.db.query(queryString, [id_p], (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        if (row) {
            const imparte = {
                id_p: row.id_p,
                cod_a: row.cod_a,
                grupo: row.grupo,
                horario: row.horario,
            };
            callback(null, {
                statusCode: 200,
                message: 'El profesor imparte en ',
                data: imparte
            });
        }
        else {
            callback(null, {
                statusCode: 404,
                message: 'Imparticion no encontrada'
            });
        }
    });
};
exports.getByPro = getByPro;
const getByAsi = (cod_a, callback) => {
    const queryString = 'SELECT * FROM imparte WHERE cod_a = ? ';
    db_1.db.query(queryString, [cod_a], (err, result) => {
        if (err) {
            callback(err);
        }
        const row = result[0];
        if (row) {
            const imparte = {
                id_p: row.id_p,
                cod_a: row.cod_a,
                grupo: row.grupo,
                horario: row.horario,
            };
            callback(null, {
                statusCode: 200,
                message: 'La asignatura es impartida por ',
                data: imparte
            });
        }
        else {
            callback(null, {
                statusCode: 404,
                message: 'Imparticion no encontrada'
            });
        }
    });
};
exports.getByAsi = getByAsi;
const update = (imparte, callback) => {
    const queryString = 'UPDATE imparte SET grupo = ?, horario = ? WHERE id_p = ? AND cod_a = ?';
    db_1.db.query(queryString, [imparte.grupo, imparte.horario, imparte.id_p, imparte.cod_a], (err) => {
        if (err) {
            callback(err);
        }
        callback(null, {
            statusCode: 200,
            message: 'Imparticion actualizada exitosamente',
            data: {
                id_p: imparte.id_p,
                cod_a: imparte.cod_a,
                grupo: imparte.grupo,
                horario: imparte.horario
            }
        });
    });
};
exports.update = update;
const remove = (id_p, cod_a, grupo, callback) => {
    const queryString = 'DELETE FROM imparte WHERE id_p = ? AND cod_a = ? AND grupo = ?';
    db_1.db.query(queryString, [id_p, cod_a, grupo], (err) => {
        if (err) {
            callback(err);
        }
        callback(null, {
            statusCode: 200,
            message: 'Impartición eliminada exitosamente'
        });
    });
};
exports.remove = remove;
