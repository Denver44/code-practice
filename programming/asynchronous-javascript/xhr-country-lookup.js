// Browser-only: uses XMLHttpRequest and document, so this won't run with
// `node`. Paste it into a browser console, or use the live editor on the
// matching blog post.

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
  document.querySelector('.countries').style.opacity = 1;
}

function getCountryData(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);
  });
}

getCountryData('portugal');
getCountryData('germany');
