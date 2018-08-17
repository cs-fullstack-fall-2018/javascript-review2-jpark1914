// //===Exercise 1===//
// function main() {
//     var studentName = "Kenn";
//     printName(studentName);
//
// }
//
// main();
//
// function printName(name) {
//     document.write("Hello " + name);
// }

// //===Exercise 2===//
// function main() {
// var number = parseInt(prompt("What is your number?"));
// numberValue(number)
// }
//
// main();
//
// function numberValue(number) {
//     if(number >0){
//         alert("Number: POSITIVE");
//     }else if(number<0){
//         alert("Number: NEGATIVE");
//     }else if(number === 0){
//         alert("Number: ZERO");
//     }else{
//         alert("ERROR");
//     }
//
// }


// //===Exercise 3===//
// function main() {
// numberLoop();
// }
//
// main();
//
// function numberLoop() {
//     for(var c = -10; c<=5; c++){
//         document.write(c + " , ");
//     }
// }


// //===Exercise 4===//
// function main() {
// var fav = parseInt(prompt("Type your favorite number"));
// alert("Your favorite number is: " +fav);
// aboveOrBelow(fav)
// }
//
// main();
//
// function aboveOrBelow(number) {
//     if(number> 100){
//         alert("It's above 100");
//     }else if(number<100){
//         alert("It's below 100");
//     }else if(number === 100){
//         alert("It's 100!");
//     }else{
//         alert("Ehhh");
//     }
// }


// //===Exercise 5===//
// function main() {
// var array = [11,22, 33, 44, 55];
// var userInput = parseInt(prompt("From 1-5, how many would you like to print out"));
// printArray(userInput, array);
//
// }
//
// main();
//
// function printArray(number,arr) {
//     if(number === 1){
//         for(var i = 0; i < 1; i++){
//             document.write(arr[i] +" ");
//         }
//     }else if(number === 2){
//         for(var i = 0; i < 2; i++){
//             document.write(arr[i] + " ");
//         }
//     }else if(number === 3){
//         for(var i = 0; i < 3; i++){
//             document.write(arr[i] + " ");
//         }
//     }else if(number === 4){
//         for(var i = 0; i < 4; i++){
//             document.write(arr[i] + " ");
//         }
//     }else if(number === 5){
//         for(var i = 0; i < 5; i++){
//             document.write(arr[i] + " ");
//         }
//     }else{
//         alert("That input doesn't correlate! Shut Down");
//     }
// }


// //===Exercise 6===//
// class Book {
//     constructor(bookName, rating, yearReleased){
//         this.bookName = bookName;
//         this.rating = rating;
//         this.yearReleased = yearReleased;
//     }
//
//     woo() {
//         document.write(this.bookName + " " + this.rating + " " + this.yearReleased);
//     }
//
// }
//
//
//
// function main() {
// book1 = new Book('Harry Potter', 5, 2010);
// book2 = new Book('Artemis Foul', 3, 2002);
// book1.woo();
// book2.woo();
//
// }
//
// main();
//




//===Exercise 7===//
class Dog{
    constructor(name, breed, color, gender){
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.gender = gender;

    }
}
function main(){
    var newDog = new Dog("Fiddo", "Lab", "brown", "male");
    alert(newDog.name);
    alert(newDog.breed);
    alert(newDog.color);
    alert(newDog.gender);
}

main();




