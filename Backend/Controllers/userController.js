import {userModel} from '../Models/userModel.js'

//FOR GETTING ALL USER
export const getUsers = async (req, res) => {
    try {
      const getall = await userModel.find()
      res.status(200).send(
        {
          success:true,
          message:"ALL USERS GET SUCCESFULLY",
          getall
        }
      );
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };