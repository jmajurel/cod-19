import apiCall from "../apiCall";

function postPatient(newPatient) {
  return apiCall(
    process.env.REACT_APP_PATIENT_API_URL + "patients",
    "POST",
    newPatient
  );
}

export { postPatient };
