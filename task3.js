"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Task 3 - Name of a Person Lowrcase,Uppercase & Tittlecase
let person_name = "Saima";
let uppercase = person_name.toUpperCase();
let lowercase = person_name.toLowerCase();
const titlecase = person_name.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
});
console.log(uppercase);
console.log(lowercase);
console.log(titlecase);
