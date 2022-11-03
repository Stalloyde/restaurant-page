const content = document.getElementById("content");

export function loadImages () {
    const image = document.createElement("img");
    image.className = "background-img";
    content.appendChild(image);
};

const tabContainer = document.createElement("div");
tabContainer.className = "tab-container";
content.appendChild(tabContainer);

const tabButtons = document.createElement("div")
tabButtons.className = "tab-buttons";
tabContainer.appendChild(tabButtons);


export function createHomeTab () {
    const homeTab = document.createElement("button");
    homeTab.className = "home-tab";
    homeTab.textContent = "Home";
    tabButtons.appendChild(homeTab);
};

export function createMenuTab () {
    const menuTab = document.createElement("button");
    menuTab.className = "menu-tab";
    menuTab.textContent = "Menu";
    tabButtons.appendChild(menuTab);
};

export function createReserveTab () {
    const reserveTab = document.createElement("button");
    reserveTab.className = "reserve-tab";
    reserveTab.textContent = "Make Reservation";
    tabButtons.appendChild(reserveTab);
};

const tabContent = document.createElement("div")
tabContent.className = "tab-content";
tabContainer.appendChild(tabContent);