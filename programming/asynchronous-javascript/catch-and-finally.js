// Browser-only: fetch() and the DOM need a real browser environment. Paste
// it into a browser console, or use the live editor on the matching blog post.

function renderCountry(data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
      </div>
    </article>
  `;
  document.querySelector('.countries').insertAdjacentHTML('beforeend', html);
}

function renderError(message) {
  document.querySelector('.countries').insertAdjacentText('beforeend', message);
}

function getCountryData(country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then((response) => response.json())
    .then(([data]) => renderCountry(data))
    .catch((error) => {
      console.error(`💥 ${error.message}`);
      renderError(`💥 Something went wrong: ${error.message}`);
    })
    .finally(() => {
      document.querySelector('.countries').style.opacity = 1;
    });
}

getCountryData('portugal');
