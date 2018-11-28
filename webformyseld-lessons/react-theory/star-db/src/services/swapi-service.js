export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`); //return promiss //вначале получаем ответ сервера и будем ждать рез. промиса
        console.log("responce status ", res.status); //200
        if (!res.ok) {
            throw new Error(`Coul not fetch ${url}, recieved ${res.status}`); //!!!
        };
        const body = await res.json(); //return promiss//--//--
        return body;
    }
    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}/`);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}/`);
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