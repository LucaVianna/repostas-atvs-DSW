export class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }
}
        
export function printName(user) {
    return `User's name is ${user.getName()}`;
}

export function printAge(user) {
    return `User's age is ${user.getAge()}`;
}  