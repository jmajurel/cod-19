import apiCall from "../apiCall";

function getAllConditions() {
  return apiCall(process.env.REACT_APP_HEALTH_API_URL + "conditions");
}

export default { getAllConditions };
