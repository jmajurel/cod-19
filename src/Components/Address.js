import React, { useState } from "react";

const Address = ({ address, onChange }) => {
  if (!address) address = {};

  const [address1, setAddress1] = useState(address.address1);
  const [address2, setAddress2] = useState(address.address2);
  const [city, setCity] = useState(address.city);
  const [postCode, setPostCode] = useState(address.postCode);
  const [state, setState] = useState(address.state);
  const [country, setCountry] = useState(address.country);

  function handleOnChange() {
    onChange({ address1, address2, city, postCode, state, country });
  }

  return (
    <div className="address">
      <div className="formGroup">
        <label>Address: </label>
        <input
          type="text"
          value={address1}
          onChange={(e) => {
            setAddress1(e.target.value);
            handleOnChange();
          }}
        />
      </div>
      <div className="formGroup">
        <label>Address Details: </label>
        <input
          type="text"
          value={address2}
          onChange={(e) => {
            setAddress2(e.target.value);
            handleOnChange();
          }}
        />
      </div>
      <div className="formGroup">
        <label>City: </label>
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            handleOnChange();
          }}
        />
      </div>
      <div className="formGroup">
        <label>Postcode: </label>
        <input
          type="text"
          value={postCode}
          onChange={(e) => {
            setPostCode(e.target.value);
            handleOnChange();
          }}
        />
      </div>
      <div className="formGroup">
        <label>State: </label>
        <input
          type="text"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            handleOnChange();
          }}
        />
      </div>

      <div className="formGroup">
        <label>Country: </label>
        <input
          type="text"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            handleOnChange();
          }}
        />
      </div>
    </div>
  );
};
export default Address;
