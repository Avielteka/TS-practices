"use strict";
function printdetails(fName, lName) {
    if (lName) {
        return `${fName}${lName}`;
    }
    else {
        return `${fName}`;
    }
}
console.log(printdetails("aviel"));
function printdetailsUser(fullName, email) {
    email ? console.log(`${fullName},${email}`) : console.log(`${fullName}`);
}
printdetailsUser("aviel", "aviek@gmail.com");
function printCatDetails(catName, age, race) {
    catName ? console.log(`${age},${race},${catName}`) : console.log(`${age} ${race}`);
}
printCatDetails("kiti", 18, "tiger");
function getTextAndBool(text, para = true) {
    return para ? `hello ${text}` : `wellcom ${text}`;
}
console.log(getTextAndBool("aviel"));
function getNameLName(fName, lName, text = "miss") {
    return `${fName} ${lName} ${text}`;
}
console.log(getNameLName("yosi", "balacho"));
// exerecise 34
class Vehicles {
    constructor(company, model, color) {
        this.company = company;
        this.model = model;
        this.color = color;
    }
}
const Bus = new Vehicles("mazda", "spiring", "red");
console.log(Bus.company);
// exerecise 35
class Elephant {
    constructor(height, kind, age, contreyorigin) {
        this.height = height;
        this.kind = kind;
        this.age = age;
        this.contreyorigin = contreyorigin;
    }
    printDetails() {
        return `${this.height},${this.kind},${this.age} ${this.contreyorigin}`;
    }
}
const MyElephant = new Elephant("mazda", "spiring", "red", "dfdf");
console.log(MyElephant.printDetails());
// exerecise 36 
class Pants {
    constructor(size, color, fabricType, length, isAvailable) {
        this.size = size;
        this.color = color;
        this.fabricType = fabricType;
        this.length = length;
        this.isAvailable = isAvailable;
    }
    printDetails() {
        return `${this.size},${this.color},${this.fabricType}, ${this.length},${this.isAvailable}`;
    }
    get printMyDetails() {
        return this.printDetails();
    }
}
const Adidar = new Pants(12, "red", "mesi", 5, true);
console.log(Adidar.printMyDetails);
// exerecise 37
class Athlete {
    constructor(fullName, birthDate, field) {
        this.fullName = '';
        this.birthDate = '';
        this.field = '';
        this.kind = true;
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.field = field;
    }
    printDetails() {
        return `${this.fullName},${this.birthDate} ${this.field}`;
    }
    get printAthDetails() {
        return this.printDetails();
    }
    set setDetails(detail) {
        this.kind = detail;
    }
}
const myAthlete = new Athlete("Aviel Teka", "20/06/2022", "tenis");
console.log(myAthlete.setDetails);
// exerecise 38
class Footballer extends Athlete {
    constructor(fullName, birthDate, field, team, nationalTeam) {
        super(fullName, birthDate, field);
        this.team = '';
        this.nationalTeam = true;
        super.printAthDetails;
        this.team = team;
        this.nationalTeam = nationalTeam;
    }
    printFootballerDetails() {
        return super.printAthDetails + `,${this.team},${this.nationalTeam}`;
    }
}
const yAthlete = new Footballer("Aviel Teka", "20/06/2022", "football", "BARCA", true);
console.log(yAthlete.printFootballerDetails());
// exerecise 39
class User {
    constructor(fullName, age, password) {
        this._isConnected = false;
        this.fullName = fullName;
        this.age = age;
        this.password = password;
    }
    get isConnected() {
        return this._isConnected;
    }
    set setIsConnected(connected) {
        this._isConnected = connected;
    }
    static getOldestOrYoungest(str, ...users) {
        if (str == "young") {
            return users.sort((a, b) => a.age - b.age)[0];
        }
        else if (str == "old") {
            // return users.sort((a, b) => b.age - a.age)[0]
            return users.sort((a, b) => a.age - b.age)[users.length - 1];
        }
        return;
    }
}
const result = User.getOldestOrYoungest("old", new User("ASDS", 18, "HELOO12"), new User("ASDS", 16, "HELOO12"), new User("ASDS", 24, "HELOO12"));
console.log(result);
class Student extends User {
    constructor(fName, lName, age, password, email, bDate) {
        super(fName + lName, age, password);
        this.fName = '';
        this.lName = '';
        this.email = '';
        this.bDate = '';
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.bDate = bDate;
    }
    toString() {
        return `${this.fName}${this.lName}${this.age}${this.password}${this.email}${this.bDate}`;
    }
    printColor() {
        if (this.isConnected) {
            return "green";
        }
        else {
            return "red";
        }
    }
}
const mathStudent = new Student("Ari", "Teka", 22, "ari082", "ari12@gmail.com", "27/2/2021");
mathStudent.setIsConnected;
console.log(mathStudent.printColor());
// // exerecise 41
console.log('hello world');
