// Your code here
class Cat {
constructor(name,sex){
  this.name=name;
  this.sex=sex;
}
speak(){
  return `${this.name} says meow!`;
}
}

class Dog {
  constructor(name,sex){
    this.name=name;
  this.sex=sex;
}
speak(){
   return `${this.name} says woof!`;
}
}

class Bird {
 constructor(name,sex){
    this.name=name;
  this.sex=sex;
}
 speak() {
        if (this.gender === "male") {
            return `It's me! ${this.name}, the parrot!`;
        }
        else {
            return `${this.name} says squawk!`;
        }
 }
}
let cat= new cat("caty","male");
cat.speak();
let dog=new Dog("dog1","female");
dog.speak();
let bird=new Bird("pablo","male");
bird.speak();