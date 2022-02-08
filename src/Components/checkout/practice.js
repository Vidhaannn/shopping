// getElementById => get-element-by-id


let student1 = {
    name : 'Akshat Sharma',
    address : {
        houseNo : 2,
        streetName : 'Nehru Nagar',
        location : {
            city : 'Jaipur',
            state : 'Rajasthan',
            country : 'India'
        }
    }
}

let student2 = JSON.parse(JSON.stringify(student1));
student2.name = "Shubham Gupta"
student2.address.location.city = 'Agra'

console.log(student1);





// const add = (...args) => {
//     return args.reduce((acc, item) => acc + item, 0);
// }

// const sum = (...args) => {
//     let sum = 0;
//     args.forEach(item => {
//         sum += item;
//     })
//     return sum;
// }

// const addition = (...args) => {
//     let sum = 0;
//     for(let i = 0; i < args.length; i++){
//         sum += args[i];
//     }
//     return sum;
// }

// console.log('Add ', add(2,3,4,5));
// console.log('Sum ', sum(2,3,4,5));
// console.log('Addition ', addition(2,3,4,5));