// Browser-only: fetch() needs a real browser environment (or Node 18+).
// Paste it into a browser console, or use the live editor on the matching
// blog post.

function getJSON(url, errorMessage = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
}

// 1. Naive, sequential version: each await waits on the previous one
// even though the three requests don't depend on each other.
async function getCapitalCitiesSequential(c1, c2, c3) {
  try {
    const [data1] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`);
    const [data2] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`);
    const [data3] = await getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`);

    console.log([data1.capital, data2.capital, data3.capital]);
  } catch (error) {
    console.error(`💥 ${error.message}`);
  }
}

getCapitalCitiesSequential('japan', 'brazil', 'kenya');

// 2. Fixed with Promise.all: all three requests fire at the same time.
async function getCapitalCities(c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
      getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
    ]);

    console.log(data.map((country) => country[0].capital));
  } catch (error) {
    console.error(`💥 ${error.message}`);
  }
}

getCapitalCities('japan', 'brazil', 'kenya');

// 3. One rejection short-circuits the whole Promise.all.
async function demo() {
  try {
    const results = await Promise.all([
      Promise.resolve('ok 1'),
      Promise.reject(new Error('this one failed')),
      Promise.resolve('ok 3'),
    ]);
    console.log(results);
  } catch (error) {
    console.error(`💥 ${error.message}`); // only this logs, the two successes are discarded
  }
}

demo();
