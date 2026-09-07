class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  checkLastOnline() {
    console.log(`${this.firstName} was last online just now`);
  }
  sendEmail() {
    console.log(`Email sent to ${this.email}`);
  }
  delete() {
    console.log(`${this.firstName} ${this.lastName} was deleted`);
  }
}

const user1 = new User('James', 'Carter', 'james@example.com');
const user2 = new User('Neal', 'Ortiz', 'neal@example.com');

user1.sendEmail();
user2.sendEmail();

console.log('Same sendEmail function:', user1.sendEmail === user2.sendEmail);
