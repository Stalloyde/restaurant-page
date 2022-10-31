const tabContent = document.querySelector(".tab-content");

export function menuTabContent ()  {
    const image = document.createElement("div");
    image.className = "menu-img";
    image.innerHTML = "<img src= /home/stalloyde/repos/restaurant-page/src/menu.png>";
    tabContent.appendChild(image);
}