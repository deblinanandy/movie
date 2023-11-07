import BookingModel from '../model/BookingModel.js';
import MovieModel from '../model/MovieModel.js';

const reserveMovieTicket = async (req, res) => {
  const { movieId, customerName, seatCount } = req.body;

  try {
    // Check if the movie exists
    const movie = await MovieModel.findById(movieId);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    if (movie.seatsAvailable < seatCount) {
      return res.status(400).json({ message: 'Not enough seats available' });
    }

    // Calculate the total cost of the booking
    const totalCost = seatCount * movie.price;

    // Create a new Booking instance and set the date field
    const booking = new BookingModel({
      movie: movieId,
      customerName,
      seatCount,
      totalCost,
      date: new Date(), // Set the date field with the current date
    });

    // Save the booking to the database
    await booking.save();

    // Update seats available for the movie
    movie.seatsAvailable -= seatCount;
    await movie.save();

    return res.status(201).json({
      success: true,
      message: 'Movie ticket reserved successfully',
      data: booking,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error: ' + error.message,
    });
  }
};

export default reserveMovieTicket;
