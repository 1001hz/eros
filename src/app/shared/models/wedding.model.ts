export class Wedding {

  _id: string = null;
  date: string = null;
  name: string = null;
  ceremonyVenue: string = null;
  ceremonyLocation: string = null;
  ceremonyInfo: string = null;
  ceremonyTime: string = null;
  ceremonyMap: string = null;
  aftersVenue: string = null;
  aftersLocation: string = null;
  aftersInfo: string = null;
  aftersTime: string = null;
  aftersMap: string = null;

  constructor() {
  }

  makeFromResponse(data) {
    this._id = data._id;
    this.date = this._timestampToDateString(data.date);
    this.name = data.name;
    this.ceremonyVenue = data.ceremonyVenue;
    this.ceremonyLocation = data.ceremonyLocation;
    this.ceremonyInfo = data.ceremonyInfo;
    this.ceremonyTime = data.ceremonyTime;
    this.ceremonyMap = data.ceremonyMap;
    this.aftersVenue = data.aftersVenue;
    this.aftersLocation = data.aftersLocation;
    this.aftersInfo = data.aftersInfo;
    this.aftersTime = data.aftersTime;
    this.aftersMap = data.aftersMap;
  }

  _timestampToDateString(timestamp) {
    return new Date(parseInt(timestamp)).toISOString();
  }

}
