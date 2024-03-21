const usersModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await usersModel.getAllUsers(); //karena pemanggilan ke db bersifat async
    res.json({
      message: "GET all users Success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewUsers = async (req, res) => {
  const { body } = req;
  if (!body.nama || !body.email || !body.address) {
    return res.status(400).json({
      message: "Anda mengirimkan data yang salah",
      data: null,
    });
  }
  try {
    await usersModel.createNewUsers(body);
    res.status(201).json({
      message: "CREATE new user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateUsers = (req, res) => {
  const { idUser } = req.params;
  console.log("idUser", idUser);
  res.json({
    message: "UPDATE user Success",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { idUser } = req.params;
  res.json({
    message: "DELETE user Success",
    data: {
      id: idUser,
      nama: "Ilya",
      email: "ilya@gmail.com",
      addres: "Russia",
    },
  });
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers,
  deleteUser,
};
