/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name:"Emily Mudzimba",
    photo:"../images/me.jpg",
    favoriteFoods:[
        "Steak",
        "Chicken",
        "Mac and cheese",
        "Burgers",
        "Pasta"
    ],

    hobbies: [
        "Reading",
        "Travelling",
        "Movies"

    ],

    placesLived: []

};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
     
    {
        place: "Mutare, Zimbabwe",
        length: "14 years"
    },

    {
        place: "Harare, Zimbabwe",
        length: "13 years"
    },

    {
        place: "Johannesburg, South Africa",
        length: "3 years"
    }
    
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo)
document.querySelector("#photo").setAttribute("alt", myProfile.name)

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach((food) =>{
    let favoriteFoodElem = document.createElement("li");
   
    favoriteFoodElem.textContent = food;

document.querySelector("#favorite-foods").appendChild(favoriteFoodElem);

});
/* Hobbies List */
myProfile.hobbies.forEach((hobby) =>{
    let hobbyElem = document.createElement("li");
    hobbyElem.textContent = hobby;

document.querySelector("#hobbies").appendChild(hobbyElem);


});

/* Places Lived DataList */


myProfile.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement("dt");
    placesLivedPlace.textContent = placeLived.place;

    let placeLivedLength = document.createElement("dd");
    placeLivedLength.textContent = placeLived.length;


    document.querySelector("#places-lived").appendChild(placesLivedPlace);

    document.querySelector("#places-lived").appendChild(placeLivedLength);

});