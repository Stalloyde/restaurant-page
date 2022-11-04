const title = document.createElement("div");
const slogan = document.createElement("div");
const phrase1 = document.createElement("div");
const phrase2 = document.createElement("div");
const reserveBtnContainer = document.createElement("div");
const reserveBtn = document.createElement("button");
const infoContainer = document.createElement("div");
const openingHoursContainer = document.createElement("div");
const openingHoursInfo = document.createElement("div");
const locationContainer = document.createElement("div");
const locationInfo = document.createElement("div");

const tabContent = document.querySelector(".tab-content");

    function createTitle () {
        title.className = "title";
        title.textContent = "Baba Grill House";
        tabContent.appendChild(title);
    };

    function createSlogan () {
        slogan.className = "slogan";
        slogan.textContent = "The best Kebabs in the World!";
        tabContent.appendChild(slogan);
    };

    function createPhrase1 () {
        phrase1.className = "phrase1";
        phrase1.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, 
        ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus
         ullam! Similique, ut quoc`;
        tabContent.appendChild(phrase1);
    };

    function createPhrase2 () {
        phrase2.className = "phrase2";
        phrase2.textContent = `"Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, 
        ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus
         ullam! Similique, ut quoc.."`;
        tabContent.appendChild(phrase2);
    };

    function createReserveBtnContainer () { 
        reserveBtnContainer.className = "reserve-btn-container";
        tabContent.appendChild(reserveBtnContainer);
    };

    function createReserveBtn () { 
        reserveBtn.className = "reserve-btn";
        reserveBtn.id= "loadreservepage-btn";
        reserveBtn.textContent = "Make Reservation";
        reserveBtnContainer.appendChild(reserveBtn);   
    };

    function createInfoContainer () { 
        infoContainer.className = "info-container";
        tabContent.appendChild(infoContainer);
    };

    function createOpeningHoursContainer () { 
        openingHoursContainer.className = "opening-hours-container";
        infoContainer.appendChild(openingHoursContainer);
        openingHoursContainer.textContent += "Opening Hours:";         
    };

    function createOpeningHoursInfo () {
       openingHoursInfo.className = "opening-hours-info";
       openingHoursContainer.appendChild(openingHoursInfo);
       openingHoursInfo.textContent = "Daily @ 10:00am - 10:00pm";
    };

    function createLocationContainer () { 
        locationContainer.className = "location-container";
        infoContainer.appendChild(locationContainer);
        locationContainer.textContent += "Location:";
    };
    
    function createLocationInfo () {
        locationInfo.className = "location-info";
        locationContainer.appendChild(locationInfo);
        locationInfo.textContent = "#01-423, Hue Mall, 46 Turkish Avenue, G88623, Turkey";
    };

    export function homeTabContent () {
        createTitle();
        createSlogan();
        createPhrase1();
        createPhrase2();
        createReserveBtnContainer();
        createReserveBtn();
        createInfoContainer();
        createOpeningHoursContainer();
        createOpeningHoursInfo();
        createLocationContainer();
        createLocationInfo();
    };
        