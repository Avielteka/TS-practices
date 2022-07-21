function printdetails(fName:string,lName?:string):string{
    if(lName){
    return `${fName}${lName}`
    }
    else{
        return `${fName}`
    }
}
console.log(printdetails("aviel",))

function printdetailsUser(fullName:string,email?:string):void{
     email ? console.log(`${fullName},${email}`) : console.log(`${fullName}`)

}
printdetailsUser("aviel","aviek@gmail.com")

function printCatDetails(catName?:string,age:number,race:string,):void{
     catName ? console.log(`${age},${race},${catName}`) : console.log(`${age} ${race}`) 
}
printCatDetails("kiti",18,"tiger",)

function getTextAndBool(text:string,para:boolean=true,):string{
    return para ? `hello ${text}`:`wellcom ${text}`
}
console.log(getTextAndBool("aviel"))

function getNameLName(fName:string,lName:string,text:string="miss"):string{
    return   `${fName} ${lName} ${text}`
}
console.log(getNameLName("yosi","balacho"))


exerecise 34
class Vehicles {
    constructor(company:string,model:string,color:string):string{
        this.company = company;
        this.model = model;
        this.color = color 

    }
}
const Bus:Vehicles = new Vehicles ("mazda","spiring","red")
console.log(Bus.company)


exerecise 35
class Elephant {
    height:string;
    kind:string;
    age:string;
    contreyorigin:string;
    constructor(height:string,kind:string,age:string,contreyorigin:string){
        this.height = height;
        this.kind = kind;
        this.age = age;
        this.contreyorigin = contreyorigin

    }
    printDetails():string{
        return `${this.height},${this.kind},${this.age} ${this.contreyorigin}`
    }
}
const MyElephant:Elephant = new Elephant ("mazda","spiring","red","dfdf")

console.log(MyElephant.printDetails())

exerecise 36 
class Pants {
    size:number;
    color:string;
    fabricType:string;
    length:number;
    isAvailable:boolean
    constructor(size:number,color:string, fabricType:string,length:number,isAvailable:boolean){
        this.size = size
        this.color = color
        this.fabricType = fabricType
        this.length = length
        this.isAvailable = isAvailable
    }
    private    printDetails(){
       return `${this.size},${this.color},${this.fabricType}, ${this.length},${this.isAvailable}`
    }
    get printMyDetails(){
        return this.printDetails()

    } 
}
const Adidar:Pants = new Pants(12."red","mesi",5,true,)
console.log(Adidar.printMyDetails)

exerecise 37
class Athlete {
    fullName:string= ''
    birthDate:string='';
    field:string= '';
    private kind:boolean = true 
    constructor(fullName:string,birthDate:string,field:string){
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.field = field;
    }
    private printDetails(){
        return `${this.fullName},${this.birthDate} ${this.field}`
    }
    get printAthDetails(){
        return this.printDetails()
    }
    set setDetails(detail:boolean){
         this.kind = detail
    }
}
const myAthlete:Athlete= new Athlete("Aviel Teka","20/06/2022","tenis")

 console.log(myAthlete.setDetails)


exerecise 38
class Footballer extends Athlete{
    team:string='';
    nationalTeam:boolean = true;
    constructor(fullName:string,birthDate:string,field:string,team:string,nationalTeam:boolean){
        super(fullName,birthDate,field)
        super.printAthDetails
        this.team=team;
        this.nationalTeam=nationalTeam;
    }
  printFootballerDetails(){
      return super.printAthDetails + `,${this.team},${this.nationalTeam}`
  }
}
const myAthlete:Footballer= new Footballer("Aviel Teka","20/06/2022","football","BARCA",true)

console.log(myAthlete.printFootballerDetails())

exerecise 39

class User {
    private _isConnected: boolean = false;
    fullName: string
    age: number
    password: string
    constructor(fullName: string, age: number, password: string) {
        this.fullName = fullName;
        this.age = age;
        this.password = password;
    }
     get isConnected(){
        return this._isConnected;
    }
     set setIsConnected(connected:boolean) {
        this._isConnected = connected;
    }
    static getOldestOrYoungest(str: string, ...users: User[]) {
        if (str == "young") {
            return users.sort((a, b) => a.age - b.age)[0]


        } else if (str == "old") {
            // return users.sort((a, b) => b.age - a.age)[0]
        return users.sort((a, b) => a.age - b.age)[users.length-1]
        }
        return;

    }
}
const result = User.getOldestOrYoungest("old",new User ("ASDS",18,"HELOO12"),new User ("ASDS",16,"HELOO12"),new User ("ASDS",24,"HELOO12"))

console.log(result)

class Student extends User {
    fName:string = '';
    lName:string = '';
    email:string = '';
    bDate:string = '';
    constructor (fName:string,lName:string,age:number,password:string,email:string,bDate:string){
        super(fName+lName,age,password)
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.bDate = bDate;
    }
      toString(){
          return `${this.fName}${this.lName}${this.age}${this.password}${this.email}${this.bDate}`
      }
    printColor(){
        if(this.isConnected){
            return "green";
        } else{
            return "red"
        } 
    }   
}

const mathStudent:Student = new Student("Ari","Teka",22,"ari082","ari12@gmail.com","27/2/2021")
mathStudent.setIsConnected

console.log(mathStudent.printColor())

exerecise 41