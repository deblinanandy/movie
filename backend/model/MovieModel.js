import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true,
   
  },
  description: {
    type: String,
    required: true
  },
releaseDate: {
    type: String,
    required: true
  },
  postUrl: {
    type: String,
    required: true
  },
  featured: {
    type: String,
  },
  bookings: [{ type: mongoose.Types.ObjectId, ref: 'Booking' }],
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    //required: true,
    
  },
   seatsAvailable: {
    type: String,
    //required: true,
  },
  price: {
    type: String
    //required: true,
  },

});

const MovieModel = mongoose.model('Movie', movieSchema);

export default MovieModel;
