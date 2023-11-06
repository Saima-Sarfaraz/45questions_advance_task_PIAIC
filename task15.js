"use strict";
// --Task 15 - Changing Guest List --//
Object.defineProperty(exports, "__esModule", { value: true });
var name_of_friend = ["Aena", "Erum", "Afia", "Samiya", "Sk", "Laraib", "Komal"];
var message = "I hope this message finds you well. I would like to invite you to join me for a delightful dinner gathering at my place. It's a wonderful opportunity for us to catch up, share stories, and enjoy a delicious meal together.";
// --Remove Guest --//
const remove_guest = 'Afia';
console.log(`${remove_guest} can't make it to the dinner.`);
//--Add Guest --//
const add_new_guest = "Sk";
const diner_index = name_of_friend.indexOf(remove_guest);
{
    if (diner_index !== -1) {
        name_of_friend[diner_index] = add_new_guest;
    }
    else {
        console.log(`${remove_guest} was not found in the guest list.`);
    }
}
