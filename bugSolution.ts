function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane User", "John User"];

// Solution 1: Iterate and greet each user
user.forEach(name => console.log(greeter(name)));

// Solution 2: Handle the array directly (if appropriate)
function greeterArray(people: string[]): string {
    return people.join(', ');
}
console.log("Solution 2:", greeterArray(user));

// Solution 3: Use a type that accepts either a string or a string array
function greeterFlexible(person: string | string[]): string {
    if (typeof person === 'string') {
        return "Hello, " + person;
    } else {
        return "Hello, " + person.join(', ');
    }
}
console.log("Solution 3:", greeterFlexible(user));
console.log("Solution 3:", greeterFlexible("single user"));