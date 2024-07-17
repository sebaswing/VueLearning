

//function greetPerson(name:string){
//    return `Hola ${name}`
//}

const greetPerson= (name:string) =>  `hola ${name}`;

const getUser = () => 
({
    uid:'ABC-123',
    username:'Tony001',
});
//igual que
//{
//    return {
//        uid:'ABC-123',
//        username:'Tony001', 
//    }
//}

//console.log(greetPerson('Fernando'));
console.log(getUser());

const heroes = [
    {
        id:1,
        name:'Batman',
    },
    {
        id:2,
        name:'Superman',
        power:'Super Fuerza',
    },   
];

const hero = heroes.find( (aHero)=> aHero.id===2)
console.log(hero?.power?.toUpperCase());