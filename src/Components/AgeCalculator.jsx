import React, { useState } from "react";
import "./AgeCalculator.css";

export const AgeCalculator = () => {
  const [age, setAge] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const CalculateAge = () => {
    if (!birthDate) return;

    const today = new Date();
    const birthdateDate = new Date(birthDate);

    let calculatedAge = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthdateDate.getDate())
    ) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  const Reset = () => {
    setBirthDate("");
    setAge("");
  };

  return (
    <div className="wrapper">
      <h2 className="title">Age Calculator</h2>
      <p className="subtitle">
        The Age Calculator can determine the age or interval between two dates.
        The calculated age will be displayed in years.
      </p>

      <div className="card">
        {/* Left Side */}
        <div className="left">
          <h3 className="Date_heading">Date of Birth</h3>
          <input
            type="date"
            className="dateInput"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />

          <div className="buttonGroup">
            <button className="btn primary" onClick={CalculateAge}>
              Calculate Age
            </button>
            <button className="btn secondary" onClick={Reset}>
              Reset
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="right">
          <h3>Your Age is</h3>
          <p className="ageValue">{age ? `${age} years` : " "}</p>
        </div>
      </div>
    </div>
  );
};
