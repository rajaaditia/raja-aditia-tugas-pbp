const db = require('../config/config_db');

const getAllStudents = async () => {
  const [rows] = await db.query('SELECT * FROM siswa');
  return rows;
};

const getStudentById = async (id) => {
  const [rows] = await db.query('SELECT * FROM siswa WHERE id = ?', [id]);
  return rows[0];
};

module.exports = {
  getAllStudents,
  getStudentById
};