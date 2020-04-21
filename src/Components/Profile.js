import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Address from "./Address";
import "./Profile.css";

const Profile = ({ existingProfile, specialities, onSubmit }) => {
  const [t, i18n] = useTranslation();

  const [firstName, setFirstName] = useState(
    existingProfile.firstName ? existingProfile.firstName : ""
  );
  const [lastName, setLastName] = useState(
    existingProfile.lastName ? existingProfile.lastName : ""
  );
  const [speciality, setSpeciality] = useState(
    existingProfile.speciality ? existingProfile.speciality._id : undefined
  );
  const [address, setAddress] = useState(existingProfile.address);
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      email: existingProfile.email,
      firstName,
      lastName,
      address,
      specialityId: speciality,
    });
    history.push("/home");
  }

  function handleAddressChange(newAddress) {
    setAddress(newAddress);
  }

  function handleSpecialityChange(event) {
    const selectedSpeciality = event.target.value;
    setSpeciality(selectedSpeciality);
  }

  return (
    <div className="profile">
      <h2>{t("profile.title")}</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup profileImg"></div>
        <div className="formGroup">
          <label>{t("profile.emailLabel")}: </label>
          <input
            disabled
            name="email"
            type="text"
            value={existingProfile.email}
          />
        </div>
        <div className="formGroup">
          <label>{t("profile.firstNameLabel")}: </label>
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="formGroup">
          <label>{t("profile.lastNameLabel")}: </label>
          <input
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="formGroup">
          <label>{t("profile.specialityLabel")}: </label>
          <select value={speciality} onChange={handleSpecialityChange}>
            {specialities &&
              specialities.map((speciality) => (
                <option key={speciality._id} value={speciality._id}>
                  {speciality.translation &&
                  speciality.translation[i18n.language]
                    ? speciality.translation[i18n.language]
                    : specialities.name}
                </option>
              ))}
          </select>
        </div>
        <Address existingAddress={address} onChange={handleAddressChange} />
        <button type="submit">{t("profile.saveBtn")}</button>
      </form>
    </div>
  );
};

export default Profile;
