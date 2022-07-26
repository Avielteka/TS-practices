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

function printCatDetails(catName:string,age:number,race:string,):void{
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


// exerecise 34
class Vehicles {
    company:string
    model:string
    color:string
    constructor(company:string,model:string,color:string){
        this.company = company;
        this.model = model;
        this.color = color 

    }
}
const Bus:Vehicles = new Vehicles ("mazda","spiring","red")
console.log(Bus.company)


// exerecise 35
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

// exerecise 36 
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
const Adidar:Pants = new Pants(12,"red","mesi",5,true,)
console.log(Adidar.printMyDetails)

// exerecise 37
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


// exerecise 38
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
const yAthlete:Footballer= new Footballer("Aviel Teka","20/06/2022","football","BARCA",true)

console.log(yAthlete.printFootballerDetails())

// exerecise 39

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
const result1 = User.getOldestOrYoungest("old",new User ("ASDS",18,"HELOO12"),new User ("ASDS",16,"HELOO12"),new User ("ASDS",24,"HELOO12"))
console.log(result1)


// exerecise 40
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


// exerecise 41

class Room {
    width:number= 0;
    length:number= 0;
    size:number= 0;
    private thereIsWindow:boolean = false
    constructor(width:number,length:number,size:number){
        this.width = width;
        this.length = length;
        this.size = size;
    }
    get getWindow():boolean{
        return this.thereIsWindow;
    }
    set setGetWindow(thereWindow:boolean){
         this.thereIsWindow = thereWindow;
    }

    static getBigRoom(bigOrsmall:string,...apartment:Room[]){
        if(bigOrsmall=="big"){
          return  apartment.sort((a,b)=> b.size-a.size)[0]

        }else if(bigOrsmall=="small"){
          return apartment.sort((a,b)=>a.size-b.size)[0]  
        }
        return
    }
}


// exerecise 42

class Kitchen extends Room{
    _width:number=0;
    _length:number=0;
    _size:number=0;
    num_Closet:number = 0;
    constructor(width:number,length:number,size:number,numCloset:number){
    super(width,length,size)
    this._width =width;
    this._length =length;
    this._size =size;
    this.num_Closet=numCloset;
    }
   printDetails(){
       return `${this._width} ${this._length} ${this._size} ${this.num_Closet}`
   }
   getMessageByIsWindow(){
   if(this.getWindow){
       return "have window"
   }else{
       return "close Room"
   }
   }
}

// exerecise 47

class Garage {
    private thereIsAutom: boolean = false
    nameOf_Garage: string;
    city_: string;
    numOf_Employee: number;
    is_Confirm: boolean = true;
    constructor(nameOfGarage: string, city: string, numOfEmployee: number, isConfirm: boolean) {
        this.nameOf_Garage = nameOfGarage;
        this.city_ = city;
        this.numOf_Employee = numOfEmployee;
        this.is_Confirm = isConfirm;
    }
    get getIsConfirm(): boolean {
        return this.thereIsAutom;
    }
    set setConfirm(isConfirm:boolean) {
        this.thereIsAutom = isConfirm;
    }

    static getGarage(upOrDown:string="up",...someGarges:Garage[]){
        if(upOrDown ==="up"){
            return someGarges.sort((a,b) => b. numOf_Employee- a.numOf_Employee)[0]

        }else if(upOrDown === "down") {
             return someGarges.sort((a,b) => a.numOf_Employee - b.numOf_Employee)[0]
        }
        return
    }
}
const result =   Garage.getGarage("up",new Garage("honda","tlv",150,true,),new Garage("mazda","haifa",180,true,))

console.log(result)


// exerecise 50

interface IUser {
    fname:string;
    lname:string;
    date:Date;
}

class Person {
    height:number ;
    state:string ;
    user:IUser ;
    constructor(height:number,state:string,user:IUser){
        this.height = height;
        this.state = state;
        this.user = user;
    }
}
 const man:Person = new Person(140,'ETHUOPIA',{fname:'Aviel',lname:'Teka',date:new Date("06/07/2000")})

interface IVehicles {
    brand:string;
    numOfDoors:number;
    numOfWhells:number;
}


// exerecise 51
class VehiclesStore {
    city:string;
    state:string;
    storeName:string;
    vehiclesArray:IVehicles[]

    constructor(city:string,state:string,storeName:string,vehiclesArray:IVehicles[]){
        this.city = city;
        this.state= state;
        this.storeName = storeName;
        this.vehiclesArray = vehiclesArray
    }
}
const mazda:VehiclesStore = new VehiclesStore ('LAS VEGAS','Carlifonia','AT-Shop',[{brand:'spiring',numOfDoors:2,numOfWhells:4}])
console.log(mazda)


// exerecise 52
function getTwoPara<T,E>(para1:T,para2:E,bool:boolean):T{
    if(bool){
        return para1;
    }
let newpara:T;

}