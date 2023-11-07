import multer from 'multer';

const DIR = './public/';

// Configure disk storage
const pictureStorage = multer.diskStorage({
  // Destination to store image
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, Date.now() + '_' + fileName);
  }
});

const picture = multer({
  storage: pictureStorage,
  limits: {
    fileSize: 1000000 // 1000000 Bytes = 1 MB
  },
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /png|jpg|jpeg/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);
    
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Please upload a PNG, JPG, or JPEG image'));
    }
  }
});

export default picture;
