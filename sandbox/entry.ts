console.log("hello");

type Person = {
    name: string;
    age: number;
}

const person1: Person = {
   name: "Filip",
    age: 15,
};

console.warn(person1);

type PersonExtended = Person & {
   email: string,
};

const person2: PersonExtended = {
    name: "Franta",
    age: 30,
    email: "franta@seznam.cz",
}

interface User {
    name: string;
    age: number;
}

interface UserTypeExtends extends Person {
    phone: string;
}

function greet(person: Person): void
{
    console.warn(person);
}

greet(person1);
greet(person2);
greet({
   name: "Marek",
   age: 10,
});

// greet("test");

function greet2(personExtended: PersonExtended | Person): void
{
    console.warn("greet2", personExtended);
}

// greet2(person1 as any as PersonExtended);
greet2(person2);
greet2(person1);

class Collection<T> {
    protected data: T[];

    constructor(data: T[]) {
        this.data = data;
    }

    public getData(): T[] {
        return this.data;
    }
}

const collectionOfNumbers: Collection<number> = new Collection<number>([1, 2, 3]);
collectionOfNumbers.getData();

const collectionOfStrings: Collection<string> = new Collection<string>(["abc", "dec"]);
console.warn(collectionOfStrings);

