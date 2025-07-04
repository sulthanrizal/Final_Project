import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dataAgency } from "../../dummy/data-agency";
import BackgroundBooking from "../../assets/bg-booking.png";
import { BookingForm } from "./booking-form";
import { useUser } from "../../context/UserContext";
import "./index.scss";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      const token = localStorage.getItem('token'); // Get token directly from localStorage
      console.log("Frontend - Token from localStorage (before fetch):", token);
      const response = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: {
          "x-auth-token": token,
        },
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
    "Bukti Bayar",
  ];

  return (
    <div className="booking-container">
      <div className="booking-background">
        <img src={BackgroundBooking} />
      </div>
      <div className="booking-content">
        <div className="booking-header">
          <h1 className="text-title">Booking Agensi </h1>
          <h2 className="text-subtitle">
            {agency.nameCompany} - {agency.category}
          </h2>
          <img src={`${agency.image}`} className="booking-img" />
        </div>
        <div className="stepper-wrapper">
          <div className="stepper">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step-item ${
                  index + 1 === currentStep ? "active" : ""
                } ${index + 1 < currentStep ? "completed" : ""}`}
              >
                <p className="step-name">{step}</p>
              </div>
            ))}
          </div>
        </div>
        <BookingForm
          handleInputChange={handleInputChange}
          handleFileChange={handleFileChange}
          handleSubmit={handleSubmit}
          fileName={fileName}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          formData={formData}
          agency={agency}
        />
      </div>
    </div>
  );
};

export default BookingAgency;
