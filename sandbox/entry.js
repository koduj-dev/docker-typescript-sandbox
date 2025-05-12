console.log("hello");
var person1 = {
    name: "Filip",
    age: 15,
};
console.warn(person1);
var person2 = {
    name: "Franta",
    age: 30,
    email: "franta@seznam.cz",
};
function greet(person) {
    console.warn(person);
}
greet(person1);
greet(person2);
greet({
    name: "Marek",
    age: 10,
});
// greet("test");
function greet2(personExtended) {
    console.warn("greet2", personExtended);
}
greet2(person1);
