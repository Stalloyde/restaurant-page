const tabContent = document.querySelector(".tab-content");

export function menuTabContent ()  {
    const image = document.createElement("img");
    image.className = "menu-img";
    image.src = "/home/stalloyde/repos/restaurant-page/src/menu.gif";
    tabContent.appendChild(image);
}