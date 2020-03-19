import apiCall from "./apiCall";

function getAllSituation() {
  return apiCall(
    process.env.REACT_APP_API_URL + "situations?global=true",
    "GET"
  );
}

export default { getAllSituation };
