const content = document.getElementById("content");
export function createTitle () {
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = "The World's Greatest Kebab";
    content.appendChild(title);;
};
    
export function createCatchPhrase () {
    const catchPhrase = document.createElement("div");
    catchPhrase.className = "catch-phrase";
    catchPhrase.textContent = "Sometimes, the best things come from a giant skewer";
    content.appendChild(catchPhrase);
};

export function loadImage () {
    const image = document.createElement("div");
    image.className = "background-img";
    image.innerHTML = "<img src= /home/stalloyde/repos/restaurant-page/src/kebab.jpg>";
    content.appendChild(image);;
};