import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Address = ({ existingAddress, onChange }) => {
  if (!existingAddress || existingAddress == {})
    existingAddress = {
      address1: "",
      address2: "",
      city: "",
      postCode: "",
      state: "",
      country: "",
    };
  const [address, setAddress] = useState(existingAddress);
  const [t, i18n] = useTranslation();

  function handleOnChange() {
    onChange(address);
  }

  return (
    <div className="address">
      <div className="formGroup">
        <label>{t("profile.address.address1Label")}: </label>
        <input
          type="text"
          value={address.address1}
          onChange={(e) => {
            setAddress({ ...address, address1: e.target.value });
            onChange({ ...address, address1: e.target.value });
          }}
        />
      </div>
      <div className="formGroup">
        <label>{t("profile.address.address2Label")}: </label>
        <input
          type="text"
          value={address.address2}
          onChange={(e) => {
            setAddress({ ...address, address2: e.target.value });
            onChange({ ...address, address2: e.target.value });
          }}
        />
      </div>
      <div className="formGroup">
        <label>{t("profile.address.cityLabel")}: </label>
        <input
          type="text"
          value={address.city}
          onChange={(e) => {
            setAddress({ ...address, city: e.target.value });
            onChange({ ...address, city: e.target.value });
          }}
        />
      </div>
      <div className="formGroup">
        <label>{t("profile.address.postCodeLabel")}: </label>
        <input
          type="text"
          value={address.postCode}
          onChange={(e) => {
            setAddress({ ...address, postCode: e.target.value });
            onChange({ ...address, postCode: e.target.value });
          }}
        />
      </div>
      <div className="formGroup">
        <label>{t("profile.address.stateLabel")}: </label>
        <input
          type="text"
          value={address.state}
          onChange={(e) => {
            setAddress({ ...address, state: e.target.value });
            onChange({ ...address, state: e.target.value });
          }}
        />
      </div>

      <div className="formGroup">
        <label>{t("profile.address.countryLabel")}: </label>
        <input
          type="text"
          value={address.country}
          onChange={(e) => {
            setAddress({ ...address, country: e.target.value });
            onChange({ ...address, country: e.target.value });
          }}
        />
      </div>
    </div>
  );
};
export default Address;
