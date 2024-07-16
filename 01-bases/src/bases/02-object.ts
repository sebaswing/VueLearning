

export const person = {
    lastName: "Stark",
    age:45,
    address:{
        city: 'New York',
        zip: 654561,
        lat: 15.4654 ,
        long: 21.543
    }
} //as const;

const person2 = structuredClone(person)

person2.lastName = 'Parker';
person2.address.city = 'LA';

console.log({person});
console.log ({person2});