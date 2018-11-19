let name = 'joe';
name = 'bb';

const pi = 3.14;
pi = 4;

// function sq(x){
//     return x*x;
// }
const sq = (x, y) => x * y;
console.log(sq(2, 8));
const arr = ['1', '2', '3', '4'];
const res = arr
    .map((el) => parseInt(el))
    .filter((num) => num % 2)
    .reduce((max, value) => Math.max(max, value), 0);
console.log(res);
const res2 = arr
    .map(function (el) {
        return parseInt(el);
    })
    .filter(function (num) {
        return num % 2;
    })
    .reduce(function (max, value) {
        return Math.max(max, value);
    });
console.log(res2);
// ---------------------------

const greeter = {
    greet: function (name) {
        console.log('Hello', name);
    },

    greetAll: function (names) {
        names.forEach((name) => {
            this.greet(name);
        });
    }
};

greeter.greetAll(['bob', 'mark', 'peter']);

// ===========================================

function fetchOrders(count, start) {
    if (count === undefined) {
        count = 10;
    }

    if (start === undefined) {
        start = 0;
    }
    console.log('Getting', count, 'orders starting from', start);
}
fetchOrders();
// ымьждьм

function fetchOrders(count = 11, start = 1) {

    console.log('Getting', count, 'orders starting from', start);
}
fetchOrders();

// ______________________________________________
function fetchOrders(count = 3, start) {

    console.log('Getting', count, 'orders starting from', start);
}
fetchOrders(undefined, 11);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function findProducts(opts = {
    minPrice: 10,
    maxPrice: 20
}) {
    console.log(opts);
}
findProducts({
    minPrice: 12,
    maxPrice: 22
});
// ____+_+_+_+_+_+_+_+_+____
max(1, 3);
max(1, 2, 3, 4, 5);

function max(a, b, ...numbers) {
    console.log(numbers);
    //pseudo0array
    //var numbers = Array.prototype.slice.call(arguments);
}
max(1);
max();
max(1, 2, 3)
// )__(_)(_(_(_(_(_()_())))))

//Spread operator/ Video 12

const arr = [1, 2, 3, 4, 5];
// const res = Math.max.apply(Math, arr);
// console.log(res);
const res = Math.min(...arr);
console.log(res);

const arr2 = [3112, 122, 1213, 1224, 1245];

const res3 = Math.max(9304, ...arr, 12122, ...arr2, 798798);
console.log(res3);

const shallowCopy = [...arr, ...arr2];
console.log(shallowCopy);
//+++++++++++++++++++++++++++++
//destructuring
const person = {
    firstName: 'Peter',
    lastName: 'Smith',
    age: 27
}

// const firstName = person.firstName;
// const lastName = person.lastName;

// console.log(firstName, lastName);

const {
    firstName,
    lastName
} = person;
console.log(firstName, lastName);

const person2 = {
    name: {
        first: 'Peter',
        last: 'Smith'
    },
    age: 27
};
const {
    name: {
        first,
        last
    }
} = person2;
console.log(first, last);

const person3 = {
    name: {
        first: 'Peter',
        last: 'Smith'
    },
    age: 27
};

const {
    role = "user"
} = person3;
const {
    mariageStatus: {
        gender = "male"
    } = {}
} = person3;
//const {name:{first: firstName, last: lastName}} = person3;
console.log(firstName, lastName, role, gender);

function connect({
    host = 'localhost',
    port = 123,
    user = 'guest'
} = {}) {
    console.log('user:', user, 'port:', port, 'host:', host);
}
connect();

const dict = {
    duck: 'qwack',
    dog: 'wuff',
    mouse: 'squeak'
};
const {
    duck,
    ...otherAnimals
} = dict;
console.log(duck);
console.log(otherAnimals);

//Array Destructuring
const fib = [1, 1, 2, 3, 5, 8, 13];
const [, a, , b, , , c] = fib;
console.log(a, b, c);

const line = [[10,17],[14,7]];
const [ [p1x,p1y], [p2x,p2y], [p3x=0, p3y=10]=[]]=line;
console.log(p1x+p2y-p1y+p2x, p3x,p3y);
const [p1, ...oth]=line;
console.log(p1);
console.log(oth);
// _--
const dict2 = {
    duck: 'qwack',
    dog: 'wuff',
    mouse: 'squeak',
    hamser:'squeak'
};
const res = Object.entries(dict2)
.filter(([, value]) => value==='squeak')
.map(([key])=> key);
console.log(res);

const shape={
    type:"segment",
    coordinates: {
        start:[10,15],
        finish:[12,12]
    }
};

const {coordinates:{start:[strtX, StartY], finish:[f1,f2]}}=shape;
console.log(strtX,f2);