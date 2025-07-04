const express = require('express');
const router = express.Router();
const multer = require('multer');
const bookingController = require('../controllers/bookingController');
const auth = require('../middleware/authMiddleware');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/bookings', auth, upload.single('paymentProof'), bookingController.createBooking);

module.exports = router;
