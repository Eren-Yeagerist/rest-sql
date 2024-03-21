const dbPool = require("../config/database");

const getAllUsers = () => {
  const sqlQuery = "SELECT * FROM `users`";

  return dbPool.execute(sqlQuery);
};

const createNewUsers = () => {
  const sqlQuery = `INSERT INTO users(nama, email, address) VALUES ('${body.nama}','${body.email}','${body.address}')`;

  return dbPool.execute(sqlQuery);
};

module.exports = {
  getAllUsers,
  createNewUsers,
};
