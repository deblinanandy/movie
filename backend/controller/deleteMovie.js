import MovieModel from "../model/MovieModel.js";

const deleteAllAdmins = async (req, res) => {
  try {
    const result = await MovieModel.deleteMany({});

    if (result.deletedCount > 0) {
      return res.status(200).json({ message: 'All admins deleted successfully' });
    } else {
      return res.status(404).json({ error: 'No admins found to delete' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred while deleting admins', message: error.message });
  }
};

export default deleteAllAdmins;
