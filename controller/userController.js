import {excuteQuery} from "../config/db";

export const createUser = async (req, res) => {
  try {
    const [name, email] = Object.values(req.body);
    const result = await excuteQuery("INSERT INTO `user`(`name`, `email`) VALUES (?,?)", [name, email]);
    res.status(201).json(result)
  } catch ( error ) {
      console.log( error );
  }
}

export const getUser = async (req, res) => {
    try {
      const result = await excuteQuery("SELECT * FROM `user`", []);
      res.status(200).json(result)
  } catch ( error ) {
      console.log( error );
  }
}

export const getSingleUser = async (req, res) => {
    try {
      console.log(req.query.id)
      const result = await excuteQuery("SELECT * FROM `user` WHERE id = ? ", [req.query.id]);
      res.status(200).json(result)
  } catch ( error ) {
      console.log( error );
  }
}

export const deleteUser = async (req, res) => {
  try {
    console.log(req.query.id)
    const result = await excuteQuery("DELETE FROM `user` WHERE id = ? ", [req.query.id]);  
    res.status(200).json("User Delete")
} catch ( error ) {
    console.log( error );
}
}
