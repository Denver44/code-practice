// Challenge: this ticket object has no validation at all. Anyone can
// write an invalid priority, a malformed email, or a one-letter name.
//
// Wrap `ticket` in a Proxy with a `set` trap that enforces:
//   1. reporterName: letters only (isAllLetters), at least 3 characters
//   2. reporterEmail: must pass isValidEmail
//   3. priority: must be a number between 1 and 5 (inclusive)
//
// Use Reflect.set to forward valid writes to the real object.
// Throw a descriptive Error for anything that fails validation.
//
// Check final/ once you're done, or if you get stuck.

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isAllLetters(value) {
  return /^[A-Za-z]+$/.test(value);
}

const ticket = {
  reporterName: 'Denver',
  reporterEmail: 'denver@example.com',
  priority: 3,
};

// TODO: wrap `ticket` in a Proxy here and export that instead.
const ticketProxy = ticket;

ticketProxy.priority = 8; // should throw, but currently just sets it
console.log('Priority is now (should have thrown):', ticketProxy.priority);
