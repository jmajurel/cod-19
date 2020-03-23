import apiCall from "../apiCall";

function getAllSymptoms() {
  return apiCall(process.env.REACT_APP_HEALTH_API_URL + "symptoms");
}

export { getAllSymptoms };
