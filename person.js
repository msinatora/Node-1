class Person {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return `Hi, my name is ${this.name}!`;
    }
}

module.exports = {
    Person,
}