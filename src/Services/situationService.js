import apiCall from "./apiCall";
const API_URL = "https://cod19-situation.herokuapp.com/situations";

function getAllSituation(abortSignal) {
  return apiCall(abortSignal, API_URL, "GET");
}

export default { getAllSituation };
