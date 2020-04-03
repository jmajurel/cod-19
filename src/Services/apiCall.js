export default function apiCall(url, method, body = null) {
  const option = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  if (method !== "GET") option["method"] = method;
  if (!!body) option.body = JSON.stringify(body);
  return fetch(url, option)
    .then(res => res.json())
    .catch(console.err);
}
