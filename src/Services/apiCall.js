export default function apiCall(url, method, body = null) {
  const option = {};
  if (method !== "GET") option["method"] = method;
  if (!!body) option["body"] = JSON.stringify(body);
  return fetch(url)
    .then(res => res.json())
    .catch(console.err);
}
