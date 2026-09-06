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

const ticketProxy = new Proxy(ticket, {
  set(target, property, value) {
    if (property === 'reporterName') {
      if (!isAllLetters(value)) {
        throw new Error('reporterName must contain only letters.');
      }
      if (value.length < 3) {
        throw new Error('reporterName must be at least 3 characters.');
      }
    }
    if (property === 'reporterEmail' && !isValidEmail(value)) {
      throw new Error('reporterEmail must be a valid email address.');
    }
    if (property === 'priority') {
      if (typeof value !== 'number') {
        throw new Error('priority must be a number.');
      }
      if (value < 1 || value > 5) {
        throw new Error('priority must be between 1 and 5.');
      }
    }
    return Reflect.set(target, property, value);
  },
});

try {
  ticketProxy.priority = 8;
} catch (error) {
  console.log('Blocked invalid priority:', error.message);
}

try {
  ticketProxy.reporterEmail = 'not-an-email';
} catch (error) {
  console.log('Blocked invalid email:', error.message);
}

ticketProxy.reporterName = 'Neal';
console.log('Valid write went through:', ticketProxy.reporterName);
