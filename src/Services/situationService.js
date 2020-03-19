import apiCall from "./apiCall";

function getAllSituation() {
  return apiCall(process.env.API_URL + "situations?global=true", "GET");
}

export default { getAllSituation };
