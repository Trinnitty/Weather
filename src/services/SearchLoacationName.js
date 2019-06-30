export default class SearchLocationName {
  // static apiKey = "b6907d289e10d714a6e88b30761fae22";
  // // static url = "https://openweathermap.org/data/2.5/weather?";
  // static latit;
  // static long;
  // static apiForSearchLocation = `${this.url}lat=${this.latit}&lon=${
  //   this.long
  // }&appid=${this.apiKey}`;

  static url = "https://api.ipgeolocationapi.com/geolocate";

  static getGeolocation() {
    return fetch(this.url);
  }

  // static getGeolocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(this.suc);
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // }
  // static suc(pos) {
  //   var crd = pos.coords;
  //   console.log(`Latitude : ${crd.latitude}`);
  //   console.log(`Longitude: ${crd.longitude}`);
  // }

  // static fetchData() {
  //   // console.log(this.latit);
  //   // return fetch(this.apiForSearchLocation);
  // }
}
