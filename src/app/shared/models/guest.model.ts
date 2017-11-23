export class Guest {

  _id: string = null;
  firstName: string = null;
  lastName: string = null;

  constructor() {
  }

  makeFromResponse(data) {
    this._id = data._id;
    this.lastName = data.lastName;
    this.firstName = data.firstName;
  }

}
