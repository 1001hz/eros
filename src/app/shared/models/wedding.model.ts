export class Wedding {

  _id: string = null;
  date: string = null;

  constructor() {
  }

  makeFromResponse(data) {
    this._id = data._id;
    this.date = data.date;
  }
}
