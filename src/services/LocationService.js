export default class LocationService {
  static apiKey = "xYjOyFkZsPAdPSDbJrQsdGr0gT4fIe1uZBpBow0A";
  static url = "https://ip-location.icu/api/v1";
  static adressToGetIp = `${this.url}/user-info/?apiKey=${this.apiKey}`;
  static ip;
  static adressToGetLocation = `${this.url}/city/?apiKey=${this.apiKey}&ip=${
    this.ip
  }`;

  static getIp() {
    fetch(this.adressToGetIp)
      .then(response => response.json())
      .then(jsonData => {
        this.ip = jsonData.ip;
        console.log(this.ip);
        return jsonData.ip;
      });
  }

  static getCity() {
    this.getIp();
    return fetch(`${this.url}/city/?apiKey=${this.apiKey}&ip=${this.ip}`);
  }
}
