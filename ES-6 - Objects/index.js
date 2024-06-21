const person = {
    firstName: "Bala",
    secondName: "murugan",
    age: 21,
    isAlive: true,
    fullName() {
        return `${this.firstName} ${this.secondName}`
    }
}

const personMoreDetails = {
    yearOfAge() {
        return new Date().getFullYear() - this.age
    }
}
Object.assign(person, personMoreDetails)
console.log(person);