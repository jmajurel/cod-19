import apiCall from "../apiCall";

function getSituationByCountry(countryName) {
  return apiCall(
    process.env.REACT_APP_API_URL + `countries?name=${countryName}`
  ).then(res => res.situations);
}

function getAllCountries() {
  return apiCall(process.env.REACT_APP_API_URL + "countries");
}

export default { getSituationByCountry, getAllCountries };
