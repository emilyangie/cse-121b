/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
        
/* async displayTemples Function */
const displayTemples = (temples) => {
    templesElement.innerHTML = "";
    temples.forEach((temple) => {

        const article = document.createElement("article");
        templesElement.appendChild(article);
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    data = await response.json();
    templeList.push(...data);
    displayTemples(templeList);
};


/* reset Function */
const reset = () => {
    templesElement.textContent = "";
}

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
};


/* Event Listener */
document.getElementById("sortBy").addEventListener("change", () => {
    sortBy(templeList);
});

getTemples();
