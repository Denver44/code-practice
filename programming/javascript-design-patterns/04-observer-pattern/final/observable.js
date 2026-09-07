const observers = [];

const observable = Object.freeze({
  subscribe(fn) {
    observers.push(fn);
  },
  unsubscribe(fn) {
    const index = observers.indexOf(fn);
    if (index !== -1) observers.splice(index, 1);
  },
  notify(data) {
    observers.forEach((observer) => observer(data));
  },
});

export default observable;
