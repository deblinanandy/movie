import BookingModel from '../model/BookingModel.js';

const ShowAllBookings = async (req, res) => {
  try {
    // Retrieve all booking records from the database
    const allBookings = await BookingModel.find({});

    // Use populate to fetch the associated movie details for each booking
    const populatedBookings = await BookingModel
      .find({})
      .populate('movie'); // 'movie' should match the field name in the BookingModel schema

    return res.status(200).json({
      success: true,
      message: 'All booking details retrieved successfully',
      data: populatedBookings,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Error: ' + error.message,
    });
  }
};

export default ShowAllBookings;
