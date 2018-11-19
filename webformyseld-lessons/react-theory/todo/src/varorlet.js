let name = 'joe';
name = 'bb';

const pi = 3.14;
pi = 4;

// function sq(x){
//     return x*x;
// }
const sq = (x,y) => x*y;
console.log(sq(2,8));
const arr = ['1', '2', '3', '4'];
const res = arr
    .map((el)=> parseInt(el))
    .filter((num)=>num%2)
    .reduce((max, value) => Math.max(max, value),0);
console.log(res);
const res2 =arr
    .map(function(el){
    return parseInt(el);
})
.filter(function(num){
    return num%2;
})
.reduce(function(max, value){
    return Math.max(max, value);
});
console.log(res2);
---------------------------

const greeter = {
    greet: function (name) {
        console.log('Hello', name);
    },

    greetAll: function (names) {
        names.forEach((name)=>{
            this.greet(name);
        });
    }
};

greeter.greetAll(['bob','mark','peter']);

===========================================

function fetchOrders( count, start){
    if (count=== undefined){
        count = 10;
    }

    if (start === undefined){
        start = 0;
    }
    console.log('Getting', count, 'orders starting from', start);
}
fetchOrders();
++++++++++++++++++++++++++++++++++++++++++++

function fetchOrders( count=11, start=1){

    console.log('Getting', count, 'orders starting from', start);
}
fetchOrders();

______________________________________________
