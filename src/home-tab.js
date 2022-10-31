const tabContent = document.querySelector(".tab-content");

export function homeTabContent () {
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = "The Best Kebab In The World!";
    tabContent.appendChild(title);

    const slogan = document.createElement("div");
    slogan.className = "slogan";
    slogan.textContent = "Sometimes the best thing comes in a giant rotating skewer";
    tabContent.appendChild(slogan);
    
    const phrase2 = document.createElement("div");
    phrase2.className = "phrase2";
    phrase2.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, 
    ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus
     ullam! Similique, ut quoc`;
    tabContent.appendChild(phrase2);

    const phrase3 = document.createElement("div");
    phrase3.className = "phrase3";
    phrase3.textContent = `"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, 
    ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus
     ullam! Similique, ut quoc.."`;
    tabContent.appendChild(phrase3);

    const reserveBtnContainer = document.createElement("div");
    reserveBtnContainer.className = "reserve-btn-container";
    tabContent.appendChild(reserveBtnContainer);
    
    const reserveBtn = document.createElement("button");
    reserveBtn.className = "reserve-btn";
    reserveBtn.textContent = "Make a Reservation";
    reserveBtnContainer.appendChild(reserveBtn);   


    const infoContainer = document.createElement("div");
    infoContainer.className = "info-container";
    tabContent.appendChild(infoContainer);
    
    const openingHoursContainer = document.createElement("div");
    openingHoursContainer.className = "opening-hours-container";
    infoContainer.appendChild(openingHoursContainer);
    openingHoursContainer.textContent += "Opening Hours:";         
    const openingHoursInfo = document.createElement("div");
    openingHoursInfo.className = "opening-hours-info";
    openingHoursContainer.appendChild(openingHoursInfo);
    openingHoursInfo.textContent = "Daily @ 10:00am - 10:00pm";

    const locationContainer = document.createElement("div");
    locationContainer.className = "location-container";
    infoContainer.appendChild(locationContainer);
    locationContainer.textContent += "Location:";
    const locationInfo = document.createElement("div");
    locationInfo.className = "location-info";
    locationContainer.appendChild(locationInfo);
    locationInfo.textContent = "#01-423, Hue Mall, 46 Turkish Avenue, G88623, Turkey";
}

// add opening hours & location at home page, social media logos at footer