import apiCall from "../apiCall";
import auth0Client from "../../Auth/Auth";

function getProfileByEmail(email) {
  return apiCall(
    `${process.env.REACT_APP_GP_API_URL}profiles/email/${email}`,
    "GET",
    auth0Client.getIdToken()
  );
}
function createProfile(newProfile) {
  return apiCall(
    `${process.env.REACT_APP_GP_API_URL}profiles`,
    "POST",
    auth0Client.getIdToken(),
    newProfile
  );
}
function updateProfile(id, updatedProfile) {
  return apiCall(
    `${process.env.REACT_APP_GP_API_URL}profiles/${id}`,
    "PUT",
    auth0Client.getIdToken(),
    updatedProfile
  );
}
export { getProfileByEmail, createProfile, updateProfile };
