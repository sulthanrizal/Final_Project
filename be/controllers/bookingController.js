const db = require('../db');

exports.createBooking = async (req, res) => {
  const {
    agency_id,
    agency_name,
    fullName,
    email,
    phone,
    domicile,
    eventType,
    eventDate,
    eventLocation,
    guestEstimate,
    selectedPackage,
    startTime,
    endTime,
    notes,
  } = req.body;

  if (!req.file) {
    return res.status(400).json({ message: 'Payment proof is required.' });
  }

  const payment_proof_path = 'uploads/' + req.file.filename;

  const query = `
    INSERT INTO bookings (agency_id, agency_name, full_name, email, phone, domicile, event_type, event_date, event_location, guest_estimate, selected_package, start_time, end_time, notes, payment_proof_path)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
    RETURNING *;
  `;

  const values = [
    agency_id,
    agency_name,
    fullName,
    email,
    phone,
    domicile,
    eventType,
    eventDate,
    eventLocation,
    guestEstimate,
    selectedPackage,
    startTime,
    endTime,
    notes,
    payment_proof_path,
  ];

  try {
    const { rows } = await db.query(query, values);
    res.status(201).json({ message: 'Booking was created successfully.', data: rows[0] });
  } catch (error) {
    console.error(error);
    res.status(503).json({ message: 'Unable to create booking.' });
  }
};
