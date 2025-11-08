//Class and Prototypes


//Class:
// user defined datatype
// used to model real world problems
// allows us to encapsulate data and behaviour in a same wrapper


//Simple Class Declaration
class Person{
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

}

//Creating an instance of the Person class
const p1 = new Person("John", 40);
p1.greet(); // Output: Hello, my name is John and I am 40 years old.




//Class Features:


// Inheritance: allows a class to inherit properties and methods from another class.
class Employee extends Person{
    position;

    constructor(name, age, position){
        super(name, age); // Call the parent class constructor
        this.position = position;
    }

    work(){
        console.log(`${this.name} is working as a ${this.position}.`);
    }
}

const e1 = new Employee("Alice", 30, "Developer");
e1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
e1.work();  // Output: Alice is working as a Developer.



//Static Methods: belong to the class itself rather than to any specific instance.
// ie they remain same across all instances of the class.

class MathUtil{
    static add(a, b){
        return a + b;
    }
}

console.log(MathUtil.add(5, 10)); // Output: 15
const m  = new MathUtil();
// console.log(m.add(5, 10)); // Error: m.add is not a function




// Encapsulation: Encapsulates data and logic in same 
// and allows us to access the data using the methods provided 
//eg :
class Human{
    name;
    age ;
    occupation;

    constructor(name, age, occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation
    }

    intro(){
        console.log(`Hello, I am ${this.name}. I am ${this.age} years old and I am a ${this.occupation}`)
    }
}


//new instance of person class 

const per = new Human("Ram",30,"Teacher");

per.intro() //we can call the method while the method accesses the data attributes of the class.

//Note:[Despite usage of Class keyword and its features as all other languages 
//      class in javascript is simply a method of utilizing the prototypic inheritance to mimic class features]


//ProtoTyping and prototype inheritance

//Prototype is simply a built-in object in JavaScript 
//that acts as a blueprint from which other objects inherit properties and methods.
//it is an object that other object use as a fallback if they dont find property or method on itself
//prototype acts as a blueprint from which the object can inherit properties and methods.



//Prototype chaining:

//When you try to access a property or method on an object:

//1. JavaScript first checks the object itself.

//2. If not found, it looks at the object’s prototype.

//3. If still not found, it continues up the prototype chain until it reaches Object.prototype.

//4. If the property isn’t even there → it returns undefined.


//Prototypic inheritance:

// a medium to allow one object to access the property and methods of other object
// it a simple concept of chaining the object to other as its prototype to allow inheritance via prototype chaining 


//Eg:

// a simple constructor method:
function Animal (name){
    this.name = name 
}

// by default we have something called .prototype() method for all the functions
// this allows us to set a prototype using the constructor called Animal()
// then any other objects created with Animal() will be chained to the Animal()'s prototype object

Animal.prototype.speak = function(){
    console.log(`${this.name} will make some noises`)
}
//above is speak method defined by the Animal's prototype object 
// when we create instances with Animal() it will help us chain the created instance to the 
// Animal()'s prototype method ie speak()


// like:

const dog = new Animal("Mike")

dog.speak()



// Classes use the same principle of prototypical inheritance but will hide the complexity by using common class syntaxes
// Hence all classes and inheritance in java is simply the usage of prototype chaining 

// In modern ES6 syntax we perfer the usage of class syntax due to its simplicity and its similarity with syntax of other languages