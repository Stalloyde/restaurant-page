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

const tabContainer = document.createElement("div");
tabContainer.className = "tab-container";
content.appendChild(tabContainer)

export function createHomeTab () {
    const homeTab = document.createElement("button");
    homeTab.className = "home-tab";
    homeTab.textContent = "Home";
    tabContainer.appendChild(homeTab);
};

export function createMenuTab () {
    const menuTab = document.createElement("button");
    menuTab.className = "menu-tab";
    menuTab.textContent = "Menu";
    tabContainer.appendChild(menuTab);
};

export function createContactTab () {
    const contactTab = document.createElement("button");
    contactTab.className = "contact-tab";
    contactTab.textContent = "Contact";
    tabContainer.appendChild(contactTab);
};