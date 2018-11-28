export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`); //return promiss //вначале получаем ответ сервера и будем ждать рез. промиса
        console.log("responce status ", res.status); //200
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recieved ${res.status}`); //!!!
        };
        const body = await res.json(); //return promiss//--//--
        return body;
    }
    
    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    async getStarship(id) {
        const starship = this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    _extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }
    _transformPlanet(planet){
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
          }
    }

    _transformStarship(starship) {
        return {
          id: this._extractId(starship),
          name: starship.name,
          model: starship.model,
          manufacturer: starship.manufacturer,
          costInCredits: starship.costInCredits,
          length: starship.length,
          crew: starship.crew,
          passengers: starship.passengers,
          cargoCapacity: starship.cargoCapacity
        }
      }
    
      _transformPerson(person) {
        return {
          id: this._extractId(person),
          name: person.name,
          gender: person.gender,
          birthYear: person.birthYear,
          eyeColor: person.eyeColor
        }
      }

}

// const swapi = new SwapiService();
// swapi.getAllPeople().then((people) => {
//     // console.log(body);
//     people.forEach((p) => {
//         console.log(p.name);
//     });
// });

// swapi.getPlanet(1).then((p) => {
//     console.log(p.name);
// });

// const getResource = async (url) => { //async await syntaxis // async func принимает url того чего мы хотим получить
//     const res = await fetch(url); //return promiss //вначале получаем ответ сервера и будем ждать рез. промиса
//     console.log("responce status ", res.status); //200
//     if (!res.ok){
//         throw new Error (`Coul not fetch ${url}, recieved ${res.status}`);
//     };
//     const body = await res.json();//return promiss//--//--
//     return body;
// };
// getResource('https://swapi.co/api/people/1/') 
//     .then((body) => {
//         console.log(body);
//     })
//     .catch((err)=>{
//         console.error('Could not fetch', err)
//     });
// //52fetch, 53catch