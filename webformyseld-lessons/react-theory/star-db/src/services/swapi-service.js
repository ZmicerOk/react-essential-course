export default class SwapiService {
  _apiBase = "https://swapi.co/api";
  getResource = async (url)=> {
    const res = await fetch(`${this._apiBase}${url}`); //return promiss //вначале получаем ответ сервера и будем ждать рез. промиса
    // console.log("responce status ", res.status); //200
    
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`); //!!!
    }
    return await res.json(); //return promiss//--//--
  }

  getAllPeople = async () =>{
    const res1 = await this.getResource(`/people/`);
    // const res2 = await this.getResource(`/people/?page=2`);
    // const res3 = await this.getResource(`/people/?page=3`);
    // const res4 = await this.getResource(`/people/?page=4`);
    // const res5 = await this.getResource(`/people/?page=5`);
    // const res6 = await this.getResource(`/people/?page=6`);
    // const res7 = await this.getResource(`/people/?page=7`);
    // const res8 = await this.getResource(`/people/?page=8`);
    // const res9 = await this.getResource(`/people/?page=9`);
    // console.log(res9);
    //const res=[...res1.results, ...res2.results, ...res3.results, ...res4.results, , ...res5.results, ...res6.results, ...res7.results, ...res8.results, ...res9.results];
    return res1.results.map(this._transformPerson);
  };

  getPerson = async (id) =>{
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () =>{
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async (id) =>{
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () =>{
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  };

  getStarship = async (id) =>{
    const starship = this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  _extractId=(item)=> {
    const idRegExp = /\/([0-9]*)\/$/;
    // console.log("idRegExp", item.url.match(idRegExp)[1]);
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  };

  _transformStarship = starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    };
  };

  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  };
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
