//import MovieModel from "../model/MovieModel.js";
import adminModel from "../model/adminModel.js";

const addmovieAdmin = async (req, res) => {
  try {
    const result = await adminModel.find().populate({ path: 'addMovies', options: { strictPopulate: false } });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Data not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data", message: error.message });
  }
};

export default addmovieAdmin;

