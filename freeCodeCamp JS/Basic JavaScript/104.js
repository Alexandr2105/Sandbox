//Поиск профиля
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    for (let a = 0; a < contacts.length; a++) {
        if (contacts[a].firstName === name && contacts[a].hasOwnProperty(prop)) {
            return contacts[a][prop];
        } else if (contacts[a].firstName === name && !contacts[a].hasOwnProperty(prop)) {
            return "No such property";
        }
    }
    return "No such contact";
}

console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));