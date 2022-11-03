const tabContent = document.querySelector(".tab-content");

export function menuTabContent ()  {
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = "Baba Grill House";
    tabContent.appendChild(title);
    
    const image = document.createElement("img");
    image.className = "menu-img";
    tabContent.appendChild(image);
}