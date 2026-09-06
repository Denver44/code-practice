function fakeFetchStat(name, cb) {
  const delay = 300 + Math.random() * 700;
  setTimeout(() => cb(`${name} data ready`), delay);
}

function getStat(name) {
  return new Promise((resolve) => fakeFetchStat(name, resolve));
}

function output(text) {
  console.log(text);
}

function combine(chain, pr) {
  return chain.then(() => pr).then(output);
}

const stats = ['inventory', 'shipping', 'payments', 'tax', 'insurance'];

stats
  .map(getStat)
  .reduce(combine, Promise.resolve())
  .then(() => output('All stats loaded'));

// Run this a few times, node solution.js. Try adding or removing items from
// the stats array, the chain handles any length without changing a line.
