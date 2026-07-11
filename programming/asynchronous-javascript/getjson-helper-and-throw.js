// Browser-only: fetch() and the DOM need a real browser environment. Paste
// it into a browser console, or use the live editor on the matching blog post.

function getJSON(url, errorMessage = 'Something went wrong') {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
    return response.json();
  });
}

function renderCountry(data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row">${(+data.population / 1000000).toFixed(1)}M people</p>
        <p class="country__row">${data.languages[0].name}</p>
        <p class="country__row">${data.currencies[0].name}</p>
      </div>
    </article>
  `;
  document.querySelector('.countries').insertAdjacentHTML('beforeend', html);
}

function renderError(message) {
  document.querySelector('.countries').insertAdjacentText('beforeend', message);
}

function getCountryAndNeighbor(country) {
  getJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`, 'Country not found')
    .then(([data]) => {
      renderCountry(data);

      const [neighborCode] = data.borders;
      if (!neighborCode) throw new Error('This country has no land neighbors');

      return getJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighborCode}`, 'Neighbor not found');
    })
    .then((data) => renderCountry(data, 'neighbor'))
    .catch((error) => {
      console.error(`💥 ${error.message}`);
      renderError(`💥 ${error.message}`);
    })
    .finally(() => {
      document.querySelector('.countries').style.opacity = 1;
    });
}

getCountryAndNeighbor('portugal');
