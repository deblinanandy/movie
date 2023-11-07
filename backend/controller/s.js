import BookingModel from '../model/BookingModel.js';
import MovieModel from '../model/MovieModel.js';

const s = async (req, res) => {
  const { customerName } = req.body;

  try {
    // Search for bookings with the provided customer name and populate the associated movie details
    const bookings = await BookingModel.find({ customerName }).populate('movie');

    if (bookings.length === 0) {
      return res.status(404).json({ message: 'No bookings found for the customer name' });
    }

    return res.status(200).json({
      success: true,
      message: 'Bookings found successfully',
      data: {
        bookings: bookings,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error: ' + error.message,
    });
  }
};

export default s;
