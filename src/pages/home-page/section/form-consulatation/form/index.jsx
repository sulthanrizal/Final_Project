import { useState } from "react";
import "./index.scss";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    alamatEmail: "",
    saranKeluhan: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert("Form berhasil dikirim!");

    setFormData({
      namaLengkap: "",
      alamatEmail: "",
      saranKeluhan: "",
    });
  };

  return (
    <div className="consultation-form">
      <div className="form-content">
        <div className="form-row">
          <div className="input-group">
            <label className="input-label">Nama Lengkap</label>
            <input
              type="text"
              name="namaLengkap"
              value={formData.namaLengkap}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Alamat Email</label>
            <input
              type="email"
              name="alamatEmail"
              value={formData.alamatEmail}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">
            Masukkan Saran atau Keluhan Kamu
          </label>
          <textarea
            name="saranKeluhan"
            value={formData.saranKeluhan}
            onChange={handleInputChange}
            rows="6"
            className="input-field textarea"
          />
        </div>

        <div className="button-wrapper">
          <button onClick={handleSubmit} className="submit-button">
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
