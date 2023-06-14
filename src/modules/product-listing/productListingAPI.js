import { stringify } from "../../app/utils/queryString";

const BASE_URL = `http://nyx.vima.ekt.gr:3000` //TODO: can be moved to a global scope

/* 
  TODO: fetch could be replaced with a fetch wrapper or with axios instance for reusability
*/
export function fetchProducts({
  page = 1,
  itemsPerPage = 20,
  filters = []
}) {
  const qs = stringify({page,itemsPerPage,filters})
  const url = `${BASE_URL}/api/books?${qs}`
  const abortController = new AbortController();
  return new Promise((resolve, reject) => {
    fetch(url,{
      method:'POST',
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response)
      })
      .catch(error=> {
        reject(error)
      });
  });
}
