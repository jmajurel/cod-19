import apiCall from "../apiCall";

function getAllGlobalSituations() {
  return apiCall(
    process.env.REACT_APP_API_URL + "situations?global=true",
    "GET"
  );
}

export default { getAllGlobalSituations };
