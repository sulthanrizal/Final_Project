export function BookingForm({
  handleInputChange,
  handleFileChange,
  handleSubmit,
  fileName,
  setCurrentStep,
  currentStep,
  formData,
}) {
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  const QRIS_IMAGE_URL =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=ContohUntukFinalProject";
  return (
    <div className="booking-form">
      {currentStep === 1 && (
        <form onSubmit={nextStep}>
          <div className="form-step">
            <h3>Isi Biodata Anda</h3>
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input
                required
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
                required
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
                required
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
                required
                type="text"
                name="domicile"
                value={formData.domicile}
                onChange={handleInputChange}
                placeholder="Jakarta Selatan"
              />
            </div>
            <div className="step-navigation">
              <button className="btn-next" type="submit">
                Selanjutnya
              </button>
            </div>
          </div>
        </form>
      )}

      {currentStep === 2 && (
        <form onSubmit={nextStep}>
          <div className="form-step">
            <h3>Detail Acara</h3>
            <div className="form-group">
              <label>Jenis Acara</label>
              <input
                required
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
                required
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Lokasi Acara</label>
              <input
                required
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
                required
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
                  required
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Waktu Selesai</label>
                <input
                  required
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
              <button className="btn-next" type="submit">
                Selanjutnya
              </button>
            </div>
          </div>
        </form>
      )}

      {currentStep === 3 && (
        <div className="form-step confirmation">
          <h3>Konfirmasi Pesanan</h3>
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
              <strong>Waktu:</strong> {formData.startTime} - {formData.endTime}
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
          <h3>Bayar DP</h3>
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
          <h3>Upload Bukti Transfer</h3>
          <div className="form-group upload-area">
            <label htmlFor="file-upload" className="upload-label">
              Klik untuk memilih file
            </label>
            <input
              required
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              accept="image/*,.pdf"
            />
            {fileName && <p className="file-name">File terpilih: {fileName}</p>}
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
  );
}
