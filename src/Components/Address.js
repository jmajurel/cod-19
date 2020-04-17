import React, { useState } from "react";
import Profile from "./Profile";

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

  function handleOnChange() {
    onChange(address);
  }

  return (
    <div className="address">
      <div className="formGroup">
        <label>Address: </label>
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
        <label>Address Details: </label>
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
        <label>City: </label>
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
        <label>Postcode: </label>
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
        <label>State: </label>
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
        <label>Country: </label>
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
