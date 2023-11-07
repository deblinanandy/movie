import BookingModel from '../model/BookingModel.js';
import MovieModel from '../model/MovieModel.js';

export default async function bookTicket(req, res) {
  const { movieId, customerName, seatCount } = req.body;

  try {
    const movie = await MovieModel.findById(movieId);

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    if (movie.seatsAvailable < seatCount) {
      return res.status(400).json({ message: 'Not enough seats available' });
    }

    const totalCost = seatCount * movie.price;
    const booking = new BookingModel({
      movie: movieId,
      customerName,
      seatCount,
      totalCost,
    });

    await booking.save();

    // Update seats available for the movie
    movie.seatsAvailable -= seatCount;
    await movie.save();

    return res.status(201).json(booking);
  } catch (error) {
    return res.status(500).json(error);
  }
}
