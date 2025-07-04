import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dataAgency } from "../../dummy/data-agency";
import "./index.scss";

const QRIS_IMAGE_URL =
  "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=ContohUntukFinalProject";

const BookingAgency = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const allAgencies = dataAgency.flatMap((group) => group.agencies);
  const agency = allAgencies.find((_, i) => i === Number(id));

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    domicile: "",
    eventType: "",
    eventDate: "",
    eventLocation: "",
    guestEstimate: "",
    selectedPackage: "",
    startTime: "",
    endTime: "",
    notes: "",
    paymentProof: null,
  });
  const [fileName, setFileName] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFormData((prev) => ({ ...prev, paymentProof: e.target.files[0] }));
      setFileName(e.target.files[0].name);
    }
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Buat objek FormData untuk mengirim file dan data teks
    const submissionData = new FormData();
    submissionData.append("agency_id", id);
    submissionData.append("agency_name", agency.nameCompany);
    submissionData.append("fullName", formData.fullName);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    submissionData.append("domicile", formData.domicile);
    submissionData.append("eventType", formData.eventType);
    submissionData.append("eventDate", formData.eventDate);
    submissionData.append("eventLocation", formData.eventLocation);
    submissionData.append("guestEstimate", formData.guestEstimate);
    submissionData.append("selectedPackage", formData.selectedPackage);
    submissionData.append("startTime", formData.startTime);
    submissionData.append("endTime", formData.endTime);
    submissionData.append("notes", formData.notes);
    submissionData.append("paymentProof", formData.paymentProof);

    try {
      const response = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        body: submissionData,
      });

      const result = await response.json();

      if (response.ok) {
        alert(
          "Pemesanan berhasil! Terima kasih. Kami akan segera menghubungi Anda."
        );
        navigate("/home");
      } else {
        alert(`Terjadi kesalahan: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Tidak dapat terhubung ke server. Pastikan backend Anda berjalan.");
    }
  };

  if (!agency) {
    return (
      <div className="booking-container">
        <h2>Agensi tidak ditemukan.</h2>
      </div>
    );
  }

  const steps = [
    "Isi Biodata",
    "Detail Acara",
    "Konfirmasi Booking",
    "Bayar DP",
    "Bukti Pembayaran",
  ];

  return (
    <div className="booking-container">
      <div className="stepper-wrapper">
        <div className="stepper">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-item ${
                index + 1 === currentStep ? "active" : ""
              } ${index + 1 < currentStep ? "completed" : ""}`}
            >
              <div className="step-name">{step}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="booking-content">
        {currentStep === 1 && (
          <div className="form-step">
            <h3>Langkah 1: Isi Biodata Anda</h3>
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label>Alamat Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="form-group">
              <label>Nomor Telepon</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="081234567890"
              />
            </div>
            <div className="form-group">
              <label>Domisili</label>
              <input
                type="text"
                name="domicile"
                value={formData.domicile}
                onChange={handleInputChange}
                placeholder="Jakarta Selatan"
              />
            </div>
            <div className="step-navigation">
              <button onClick={nextStep} className="btn-next">
                Selanjutnya
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="form-step">
            <h3>Langkah 2: Detail Acara</h3>
            <div className="form-group">
              <label>Jenis Acara</label>
              <input
                type="text"
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
                placeholder="Pernikahan, Ulang Tahun, dll."
              />
            </div>
            <div className="form-group">
              <label>Tanggal Acara</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Lokasi Acara</label>
              <input
                type="text"
                name="eventLocation"
                value={formData.eventLocation}
                onChange={handleInputChange}
                placeholder="Gedung Serbaguna, Jakarta"
              />
            </div>
            <div className="form-group">
              <label>Estimasi Tamu Undangan</label>
              <input
                type="number"
                name="guestEstimate"
                value={formData.guestEstimate}
                onChange={handleInputChange}
                placeholder="Contoh: 300"
              />
            </div>
            <div className="form-group">
              <label>Paket yang Dipilih</label>
              <select
                name="selectedPackage"
                value={formData.selectedPackage}
                onChange={handleInputChange}
              >
                <option value="">-- Pilih Paket --</option>
                <option value="Reguler">
                  Paket Reguler (mulai dari 40 juta)
                </option>
                <option value="Premium">
                  Paket Premium (mulai dari 78 juta)
                </option>
                <option value="Custom">
                  Paket Custom (harga dapat disesuaikan)
                </option>
              </select>
            </div>
            <div className="form-group-inline">
              <div className="form-group">
                <label>Waktu Mulai</label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Waktu Selesai</label>
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Catatan untuk Agency</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="4"
                placeholder="Contoh: Tema warna dominan biru navy dan gold."
              ></textarea>
            </div>
            <div className="step-navigation">
              <button onClick={prevStep} className="btn-prev">
                Kembali
              </button>
              <button onClick={nextStep} className="btn-next">
                Selanjutnya
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="form-step confirmation">
            <h3>Langkah 3: Konfirmasi Pesanan</h3>
            <div className="summary">
              <h4>Detail Agensi:</h4>
              <p>
                <strong>{agency.nameCompany}</strong>
              </p>
              <h4>Biodata:</h4>
              <p>
                <strong>Nama:</strong> {formData.fullName}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Telepon:</strong> {formData.phone}
              </p>
              <p>
                <strong>Domisili:</strong> {formData.domicile}
              </p>
              <h4>Detail Acara:</h4>
              <p>
                <strong>Jenis:</strong> {formData.eventType}
              </p>
              <p>
                <strong>Tanggal:</strong> {formData.eventDate}
              </p>
              <p>
                <strong>Lokasi:</strong> {formData.eventLocation}
              </p>
              <p>
                <strong>Estimasi Tamu:</strong> {formData.guestEstimate} orang
              </p>
              <p>
                <strong>Paket:</strong> {formData.selectedPackage}
              </p>
              <p>
                <strong>Waktu:</strong> {formData.startTime} -{" "}
                {formData.endTime}
              </p>
              <p>
                <strong>Catatan:</strong> {formData.notes}
              </p>
            </div>
            <div className="step-navigation">
              <button onClick={prevStep} className="btn-prev">
                Kembali
              </button>
              <button onClick={nextStep} className="btn-next">
                Lanjut ke Pembayaran
              </button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="form-step payment-step">
            <h3>Langkah 4: Bayar DP</h3>
            <p>
              Silakan lakukan pembayaran DP sebesar{" "}
              <strong>Rp 1.000.000,-</strong> melalui scan QRIS di bawah ini.
            </p>
            <img
              src={QRIS_IMAGE_URL}
              alt="QRIS Code for Payment"
              className="qris-image"
            />
            <p className="payment-note">
              Setelah melakukan pembayaran, simpan bukti transfer Anda untuk
              diunggah pada langkah berikutnya.
            </p>
            <div className="step-navigation">
              <button onClick={prevStep} className="btn-prev">
                Kembali
              </button>
              <button onClick={nextStep} className="btn-next">
                Saya Sudah Bayar
              </button>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <form className="form-step" onSubmit={handleSubmit}>
            <h3>Langkah 5: Upload Bukti Transfer</h3>
            <div className="form-group upload-area">
              <label htmlFor="file-upload" className="upload-label">
                Klik untuk memilih file
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                accept="image/*,.pdf"
              />
              {fileName && (
                <p className="file-name">File terpilih: {fileName}</p>
              )}
            </div>
            <div className="step-navigation">
              <button onClick={prevStep} className="btn-prev">
                Kembali
              </button>
              <button type="submit" className="btn-submit">
                Selesaikan Pemesanan
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingAgency;
