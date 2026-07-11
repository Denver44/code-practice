// Browser-only: XMLHttpRequest and the DOM need a real browser environment.
// Paste it into a browser console, or use the live editor on the matching
// blog post.

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

function getCountryAndNeighbor(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);

    const [neighborCode] = data.borders;
    if (!neighborCode) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://countries-api-836d.onrender.com/countries/alpha/${neighborCode}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, 'neighbor');
    });
  });
}

getCountryAndNeighbor('portugal');

// The same nested shape, minus the API: four back-to-back timers,
// each one only able to start once the last one's callback fires.
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
