import Qris from "../../../assets/qris.png";

export function BookingForm({
  handleInputChange,
  handleFileChange,
  handleSubmit,
  fileName,
  setCurrentStep,
  currentStep,
  formData,
  agency,
}) {
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);
  const QRIS_IMAGE_URL =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=ContohUntukFinalProject";
  return (
    <div className="booking-form">
      {currentStep === 1 && (
        <form onSubmit={nextStep}>
          <h3>Isi Biodata Anda</h3>
          <div className="form-step">
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input
                required
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
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
              />
            </div>
          </div>
          <div className="step-navigation">
            <button className="btn-next" type="submit">
              Selanjutnya
            </button>
          </div>
        </form>
      )}

      {currentStep === 2 && (
        <form onSubmit={nextStep}>
          <h3>Detail Acara</h3>
          <div className="form-step">
            <div className="form-group">
              <label>Jenis Acara</label>
              <input
                required
                type="text"
                name="eventType"
                value={formData.eventType}
                onChange={handleInputChange}
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
              />
            </div>
            <div className="form-group">
              <label>Paket yang Dipilih</label>
              <select
                name="selectedPackage"
                value={formData.selectedPackage}
                onChange={handleInputChange}
                style={{ color: "black" }}
              >
                <option value="" style={{ color: "black" }}>
                  -- Pilih Paket --
                </option>
                <option value="Reguler" style={{ color: "black" }}>
                  Paket Reguler (mulai dari 40 juta)
                </option>
                <option value="Premium" style={{ color: "black" }}>
                  Paket Premium (mulai dari 78 juta)
                </option>
                <option value="Custom" style={{ color: "black" }}>
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
                className="form-textarea"
              ></textarea>
            </div>
          </div>
          <div className="step-navigation">
            <button onClick={prevStep} className="btn-prev">
              Kembali
            </button>
            <button className="btn-next" type="submit">
              Selanjutnya
            </button>
          </div>
        </form>
      )}

      {currentStep === 3 && (
        <div className="confirmation">
          <h3>Konfirmasi Pesanan</h3>
          <div className="summary">
            <div className="biodata form-group">
              <h4>Biodata</h4>
              <p>
                <strong>Nama</strong> <br />
                {formData.fullName}
              </p>
              <p>
                <strong>Email</strong> <br />
                {formData.email}
              </p>
              <p>
                <strong>Telepon</strong> <br />
                {formData.phone}
              </p>
              <p>
                <strong>Domisili</strong>
                <br /> {formData.domicile}
              </p>
            </div>
            <div className="detail-event form-group">
              <h4>Detail Acara</h4>
              <div className="group">
                <div className="group-left">
                  <p>
                    <strong>Tanggal Acara</strong> <br />
                    {formData.eventDate}
                  </p>
                  <p>
                    <strong>Estimasi Tamu Undangan</strong> <br />
                    {formData.guestEstimate} Tamu Undangan
                  </p>
                  <p>
                    <strong>Waktu</strong>
                    <br /> {formData.startTime} - {formData.endTime} WIB
                  </p>
                  <p>
                    <strong>Lokasi</strong> <br />
                    {formData.eventLocation}
                  </p>
                </div>
                <div className="group-right">
                  <p>
                    <strong>Jenis</strong>
                    <br /> {formData.eventType}
                  </p>
                  <p>
                    <strong>Paket</strong>
                    <br />
                    {formData.selectedPackage}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="notes-price">
            <div className="notes">
              <h4>Catatan</h4>
              <p className="text-notes">{formData.notes}</p>
            </div>
            <div className="price-group">
              <h4>Total Harga</h4>
              <div className="price-list">
                <div className="price-col">
                  <p className="price-noted">Total Estimasi Biaya </p>
                  <p className="price">Rp. 85.000.000,00</p>
                </div>
                <div className="price-col">
                  <p className="price-noted">
                    Uang Muka {"("}DP 20%{")"}{" "}
                  </p>
                  <p className="price">Rp. 17.000.000,00</p>
                </div>
                <div className="price-col">
                  <p className="price-noted">Sisa Pembayaran H-7 Acara</p>
                  <p className="price">Rp. 68.000.000,00</p>
                </div>
              </div>
            </div>
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
          <div className="img-qris">
            <h4 className="name-company">{agency.nameCompany}</h4>
            <img src={Qris} className="qris" />
            <img
              src={QRIS_IMAGE_URL}
              alt="QRIS Code for Payment"
              className="qris-image"
            />
            <p className="text-nmid">NMID: 10210210120354144740</p>
          </div>
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
        <form
          className="form-step confirm payment-receipt"
          onSubmit={handleSubmit}
        >
          <h3>Upload Bukti Pembayaran</h3>
          <div className="form-group upload-area">
            <label htmlFor="file-upload" className="upload-label">
              Pilih File disini
            </label>
            <label className="upload-label-format">
              *Upload Bukti Pembayaran Format PNG, JPG, JPEG, PDF
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
