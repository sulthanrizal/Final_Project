import React from 'react';
import { useParams } from 'react-router-dom';
import { dataAgency } from '../../dummy/data-agency';
import './index.scss';

const BookingAgency = () => {
  const { id } = useParams();
  const allAgencies = dataAgency.flatMap((group) => group.agencies);
  const agency = allAgencies.find((_, i) => i === Number(id));

  if (!agency) {
    return <div className="booking-container"><h2>Agensi tidak ditemukan.</h2></div>;
  }

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h1>Formulir Pemesanan</h1>
        <p>Anda akan memesan layanan dari:</p>
        <h2>{agency.nameCompany}</h2>
      </div>
      <div className="booking-form-card">
        <div className="agency-details">
            <img src={agency.image} alt={agency.nameCompany} className="agency-img"/>
            <div className="agency-info">
                <h3>{agency.nameCompany}</h3>
                <p>{agency.address}</p>
                <p>Mulai dari {agency.price}</p>
            </div>
        </div>
        <form className="form-fields">
            <div className="form-group">
                <label htmlFor="name">Nama Lengkap</label>
                <input type="text" id="name" placeholder="Masukkan nama Anda" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Alamat Email</label>
                <input type="email" id="email" placeholder="Masukkan email Anda" required />
            </div>
            <div className="form-group">
                <label htmlFor="service">Pilih Paket/Layanan</label>
                <select id="service" required>
                    <option value="">-- Pilih salah satu --</option>
                    <option value="branding">Paket Branding Lengkap</option>
                    <option value="social-media">Paket Media Sosial</option>
                    <option value="web-design">Paket Desain Website</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="message">Pesan Tambahan</label>
                <textarea id="message" rows="4" placeholder="Jelaskan kebutuhan Anda secara singkat..."></textarea>
            </div>
            <button type="submit" className="submit-btn">Kirim Pesanan</button>
        </form>
      </div>
    </div>
  );
};

export default BookingAgency;