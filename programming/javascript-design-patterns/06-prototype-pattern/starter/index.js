// Challenge: this factory function gives every user their own separate
// copy of checkLastOnline, sendEmail, and delete, even though the code
// inside each one never changes between users. Try this check yourself:
//
//   console.log(user1.sendEmail === user2.sendEmail); // false
//
// Your job: rewrite this as a User class instead, with checkLastOnline,
// sendEmail, and delete defined on the class body (so they live on
// User.prototype, shared by every instance) and only firstName,
// lastName, and email set in the constructor.
//
// Check final/ once you're done, or if you get stuck.

function createUser(firstName, lastName, email) {
  return {
    firstName,
    lastName,
    email,
    checkLastOnline() {
      console.log(`${firstName} was last online just now`);
    },
    sendEmail() {
      console.log(`Email sent to ${email}`);
    },
    delete() {
      console.log(`${firstName} ${lastName} was deleted`);
    },
  };
}

const user1 = createUser('James', 'Carter', 'james@example.com');
const user2 = createUser('Neal', 'Ortiz', 'neal@example.com');

user1.sendEmail();
user2.sendEmail();

console.log('Same sendEmail function (should be true after refactor):', user1.sendEmail === user2.sendEmail);
