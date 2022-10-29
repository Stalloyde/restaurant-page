const tabContent = document.querySelector(".tab-content");

export function homeTabContent () {
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = "The Best Kebab In The World!";
    tabContent.appendChild(title);

    const phrase = document.createElement("div");
    phrase.className = "phrase";
    phrase.textContent = "Sometimes the best thing comes in a giant rotating skewer";
    tabContent.appendChild(phrase);
    
    const phrase2 = document.createElement("div");
    phrase2.className = "phrase2";
    phrase2.textContent += `"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, 
    ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus
     ullam! Similique, ut quo.."`;
    tabContent.appendChild(phrase2);

    const reserveBtnContainer = document.createElement("div");
    reserveBtnContainer.className = "reserve-btn-container";
    tabContent.appendChild(reserveBtnContainer);
    
    const reserveBtn = document.createElement("button");
    reserveBtn.className = "reserve-btn";
    reserveBtn.textContent = "Make a Reservation";
    reserveBtnContainer.appendChild(reserveBtn);
}

// add opening hours & location at home page, social media logos at footer