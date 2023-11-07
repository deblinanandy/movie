import { Router } from "express";
import registerController from '../controller/registerController.js'
import logingController from "../controller/logingController.js";
import getUser from "../controller/getUser.js";
import Auth, { localVariales} from "../middleware/auth.js";
//import updateUser from "../controller/updateUser.js";
import generateOtp from '../controller/generateOtp.js'
import Admincontroller from "../controller/Admincontroller.js";
import Adminloging from "../controller/Adminloging.js";
import addMovieController from "../controller/addMovieController.js";
import findAllMovie from '../controller/findAllMovie.js'
import Booking from "../controller/Booking.js";
import findAdmin from "../controller/findAdmin.js";
import addmovieAdmin from '../controller/addmovieAdmin.js'
import pictureUpload from "../controller/pictureUpload.js";
import ShowAllBookings from "../controller/BookingShow.js"
import deleteMovie from '../controller/deleteMovie.js'
import bookTicket from "../controller/bookTicket.js";
import reserveMovieTicket from "../controller/reserveMovieTicket.js";
import s from "../controller/s.js";
const router = Router();

router.get('/', (req, res) => {
   res.send(`<h3>Login app routing</h3>`);

})

router.post('/reguser', registerController);
router.post('/log', logingController); 

router.get('/getuser/:name', getUser);
router.get('/generateOtp', localVariales, generateOtp);
router.post('/addAdmin', Admincontroller);
router.post('/adminlog', Adminloging);
router.post('/addMovie', addMovieController);
router.get('/find', findAllMovie);
router.get('/findAdmin', findAdmin);
router.get('/s', s);
router.post('/booking', Booking); 
router.post('/bookingt', bookTicket); 
router.post('/picture', pictureUpload); 
router.post('/reserve', reserveMovieTicket); 
router.get('/addmovieAdmin', addmovieAdmin);
router.get('/showbooking', ShowAllBookings);
router.delete('/delete',deleteMovie)
export default router;