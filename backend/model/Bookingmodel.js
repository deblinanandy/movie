import mongoose from 'mongoose';

const Bookingmodel= new mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  date: {
    type: String,
    required: true
  },
  customerName: {
    type: String,
    required: true,
  },
  seatCount: {
    type: Number,
    required: true,
  },
  totalCost: {
    type:String,
    //required: true,
  },


 bookingTime: { type: Date, default: Date.now },
});

const Booking = mongoose.model('Booking', Bookingmodel);

export default Booking;
