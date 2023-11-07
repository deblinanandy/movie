import MovieModel from '../model/MovieModel.js';
import adminModel from '../model/adminModel.js';

const addMovieController = async (req, res) => {
  try {
    const {
      title,
      description,
      releaseDate,
      postUrl,
      featured,
      bookings,
    } = req.body;

    const existingMovie = await MovieModel.findOne({ title });

    if (existingMovie) {
      return res.status(400).json({ // Changed status to 400 for duplicate title
        success: false,
        message: 'Title already exists',
      });
    }

    const movieData = {
      title,
      description,
      releaseDate: new Date(releaseDate),
      postUrl,
      featured,
      bookings,
    };

    const newMovie = await MovieModel.create(movieData);

    // Assuming you have an 'admin' object with '_id' field, you can use it like this:
    const adminId = '652e438455b1f7d2b34f011b'; // Replace 'your_admin_id_here' with the actual admin ID
    const updatedDocument = await adminModel.findOneAndUpdate(
      { _id: adminId }, // Query to find the document to update
      { $push: { addMovies: newMovie } }, // Use $push to add the new movie to the array
      { new: true } // To return the updated document
    );

    if (!updatedDocument) {
      console.error('Failed to update admin');
      return res.status(500).json({ // Changed status to 500 for server error
        success: false,
        message: 'Failed to update admin',
      });
    }

    console.log('Updated document:', updatedDocument);
    return res.status(200).json({ // Changed status to 200 for success
      success: true,
      message: 'Movie added successfully',
      data: newMovie,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error: ' + error.message,
    });
  }
  
};

export default addMovieController;
