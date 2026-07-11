// Browser-only: fetch() needs a real browser environment (or Node 18+).
// Paste it into a browser console, or use the live editor on the matching
// blog post.

function getJSON(url, errorMessage = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
}

// 1. Promise.race: first to settle wins, fulfilled or rejected.
(async function () {
  const response = await Promise.race([
    getJSON('https://countries-api-836d.onrender.com/countries/name/spain'),
    getJSON('https://countries-api-836d.onrender.com/countries/name/norway'),
    getJSON('https://countries-api-836d.onrender.com/countries/name/chile'),
  ]);

  console.log(response[0].capital);
})();

// 2. The real use case: racing a request against a timeout.
function timeout(seconds) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Request took too long')), seconds * 1000);
  });
}

Promise.race([
  getJSON('https://countries-api-836d.onrender.com/countries/name/tanzania'),
  timeout(0.1),
])
  .then((response) => console.log(response[0].capital))
  .catch((error) => console.error(`💥 ${error.message}`));

// 3. Promise.allSettled: never short-circuits.
Promise.allSettled([
  Promise.resolve('Success 1'),
  Promise.reject(new Error('Error 1')),
  Promise.resolve('Success 2'),
]).then((results) => console.log(results));

// Contrast: the same three through Promise.all short-circuits on the rejection.
Promise.all([
  Promise.resolve('Success 1'),
  Promise.reject(new Error('Error 1')),
  Promise.resolve('Success 2'),
]).catch((error) => console.error(error));

// 4. Promise.any: skips rejections, settles on the first fulfillment.
Promise.any([
  Promise.reject(new Error('Error 1')),
  Promise.resolve('Success 1'),
  Promise.reject(new Error('Error 2')),
])
  .then((first) => console.log(first))
  .catch((error) => console.error(error)); // only reached if every Promise rejects
