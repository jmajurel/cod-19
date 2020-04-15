export default function apiCall(url, method, token = null, body = null) {
  const option = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  if (!!token) option.headers.Authorization = `Bearer ${token}`;
  if (method !== "GET") option["method"] = method;
  if (!!body) option.body = JSON.stringify(body);
  return fetch(url, option)
    .then((res) => res.json())
    .catch(console.err);
}
