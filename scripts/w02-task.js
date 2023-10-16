/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Emily Mudzimba";
let currentYear = "2023";
const profilePicture = "..\images\me.jpg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
/*const imageElement = document.querySelector("img");*/
const imageElement= document.createElement("img")

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.innerHTML = currentYear;
/*imageElement.src = profilePicture;*/
imageElement.src = `C:\Users\Nduna\Desktop\cse121b\images\me.jpg`
document.body.appendChild(imageElement)
/*imageElement.setAttribute = ("src", `Profile picture of ${fullName}`);*/

/* Step 5 - Array */
let favouriteFood = ["pizza", "burgers", "pasta", "cake", "ribs"];
let favFood = ["fish", "potato salad"];
favouriteFood.push(favFood);
foodElement.innerHTML += `<br>${favouriteFood}`;
favouriteFood.shift();
foodElement.innerHTML += `<br>${favouriteFood}`;
favouriteFood.pop();
foodElement.innerHTML += `<br>${favouriteFood}`;





