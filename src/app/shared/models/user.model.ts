export class User {

  _id: string = null;
  email: string = null;
  firstName: string = null;
  lastName: string = null;
  token: string = null;

  constructor() {
  }

  makeFromResponse(data) {
    this._id = data._id;
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.token = data.token;
  }
}
