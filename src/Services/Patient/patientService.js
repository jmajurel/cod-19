import apiCall from "../apiCall";
import auth0Client from "../../Auth/Auth";

function postPatient(newPatient) {
  return apiCall(
    process.env.REACT_APP_PATIENT_API_URL + "patients",
    "POST",
    null,
    newPatient
  );
}

function getAllPatient() {
  return apiCall(
    process.env.REACT_APP_PATIENT_API_URL + "patients",
    "GET",
    auth0Client.getIdToken()
  );
}

export { postPatient, getAllPatient };
