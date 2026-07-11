// Browser-only: fetch() and the DOM need a real browser environment. Paste
// it into a browser console, or use the live editor on the matching blog post.

function renderCountry(data) {
  const html = `
    <article class="country">
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

function getCountryData(country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function ([data]) {
      renderCountry(data);
    });
}

getCountryData('portugal');

// Simplified with arrow functions:
// const getCountryData = (country) =>
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then((response) => response.json())
//     .then(([data]) => renderCountry(data));
