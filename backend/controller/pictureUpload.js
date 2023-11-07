import picture from '../model/picture.js'
import mongoose from 'mongoose';

class pictureUpload {
  static fileupload(req, res) {
    const url = req.protocol + '://' + req.get('host');
    const user = new picture({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      profileImg: url + '/public/' + req.file.filename,
    });

    user.save()
      .then(result => {
        res.status(200).json({
          message: "User registered successfully!",
          userCreated: {
            _id: result._id,
            name: result.name,
            profileImg: result.profileImg,
          },
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  }

  static displayall(req, res) {
    picture.find()
      .then(data => {
        res.status(200).json({
          message: "User list retrieved successfully!",
          users: data,
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  }
}

export default pictureUpload;
