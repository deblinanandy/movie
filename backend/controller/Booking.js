import BookingModel from '../model/BookingModel.js';

const Booking = async (req, res) => {
  try {
    const { date, seatNumber, user, movie } = req.body;

    const existingBooking = await BookingModel.findOne({ date, seatNumber, user });

    if (existingBooking) {
      return res.status(200).json({
        success: false,
        message: 'Booking already exists',
        data: existingBooking,
      });
    }

    // Assuming that `movie` contains the movie details or ID
    const newBooking = new BookingModel({ date, seatNumber, user, movie });

    await newBooking.save();

    // Use populate to fetch the associated movie details
    const populatedBooking = await BookingModel
      .findById(newBooking._id)
      .populate('movie'); // 'movie' should match the field name in the BookingModel schema

    return res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: populatedBooking,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Error: ' + error.message,
    });
  }
};

export default Booking;
