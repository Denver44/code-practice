// Runs anywhere: no fetch, geolocation, or DOM needed for these demos.

// 1. Proving an async function never blocks its caller
async function whereAmI() {
  const position = await new Promise((resolve) => {
    setTimeout(() => resolve({ coords: { latitude: 38.7, longitude: -9.1 } }), 1000);
  });
  console.log('Finished getting location');
  return position;
}

console.log('1: Will get location');
whereAmI();
console.log('3: Standalone log');

// 2. What return actually does inside an async function
async function whereAmI2() {
  const dataGeo = await new Promise((resolve) => {
    setTimeout(() => resolve({ city: 'Lisbon', countryName: 'Portugal' }), 500);
  });
  return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
}

const result = whereAmI2();
console.log(result); // Promise {<pending>}

whereAmI2().then((city) => console.log(city)); // You are in Lisbon, Portugal

// 3. A caught error still fulfills the returned Promise
async function whereAmI3() {
  try {
    const dataGeo = await new Promise((resolve) => {
      setTimeout(() => resolve(null), 500);
    });
    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
  } catch (error) {
    console.error(`💥 ${error.message}`);
  }
}

whereAmI3().then((city) => console.log(city)); // logs the error, then logs undefined

// 4. Rethrowing turns the catch back into a rejection
async function whereAmI4() {
  try {
    const dataGeo = await new Promise((resolve) => {
      setTimeout(() => resolve(null), 500);
    });
    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
  } catch (error) {
    console.error(`💥 ${error.message}`);
    throw error;
  }
}

whereAmI4()
  .then((city) => console.log(city))
  .catch((error) => console.error(`💥💥 ${error.message}`));

// 5. A plain log still beats the async result, fixed with .finally()
console.log('1: Starting lookup');

whereAmI4()
  .then((city) => console.log(city))
  .catch((error) => console.error(`2: 💥💥 ${error.message}`))
  .finally(() => console.log('3: Standalone log')); // guarantees 1, 2, 3

// 6. An async IIFE instead of mixing .then()/.catch() with async/await
(async function () {
  try {
    const city = await whereAmI4();
    console.log(city);
  } catch (error) {
    console.error(`💥💥 ${error.message}`);
  }
  console.log('3: Standalone log'); // same 1, 2, 3 guarantee, for free
})();
