import apiCall from "../apiCall";

function getAllSpecialities() {
  return apiCall(process.env.REACT_APP_GP_API_URL + "specialities");
}

export { getAllSpecialities };
