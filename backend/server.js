import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './router/route.js';
import Database from './database/conn.js';

const app = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');
app.use('/public', express.static('public'));

// Use the Database middleware (assuming it's a valid middleware)
Database();

// Routes
app.use('/api', router);

// Start the server
app.listen(port, () => {
  console.log('Connected to port ' + port);
});
