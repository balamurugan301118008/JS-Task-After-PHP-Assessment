let person = {
    firstName : "Bala",
    lastName : "Murugan",
    get fullname(){
        return `${this.firstName}${this.lastName}`;
    },
    set fullname(value){
        let values = value.split(" ");
        this.firstName = values[0];
        this.lastName = values[1] ?? "";
    }

}
person.fullname = "Guna nithi";
console.log(person.fullname);