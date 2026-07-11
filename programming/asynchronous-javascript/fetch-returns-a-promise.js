// Browser-only: fetch() needs a real browser environment. Paste it into a
// browser console, or use the live editor on the matching blog post.

const request = fetch('https://countries-api-836d.onrender.com/countries/name/portugal');
console.log(request); // Promise {<pending>}, logged before the response ever arrives
