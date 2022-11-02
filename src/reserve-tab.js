const tabContent = document.querySelector(".tab-content");

export function reserveTabContent ()  {
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = "Baba Grill House";
    tabContent.appendChild(title);
    
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    tabContent.appendChild(form);
    
    const nameContainer = document.createElement("div");
    nameContainer.className = "name-container"
    form.appendChild(nameContainer);

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for","user-name");
    nameLabel.textContent = "Name: ";
    nameContainer.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.setAttribute("id","user-name");
    nameInput.setAttribute("name","user-name");
    nameInput.setAttribute("type","text");
    nameInput.setAttribute("pattern","^[A-Za-z]+$");
    nameInput.setAttribute("required","");
    nameContainer.appendChild(nameInput);

    const telContainer = document.createElement("div");
    telContainer.className = "tel-container"
    form.appendChild(telContainer);

    const tel = document.createElement("label");
    tel.setAttribute("for","user-tel");
    tel.textContent = "Contact Number: ";
    telContainer.appendChild(tel);

    const telInput = document.createElement("input");
    telInput.setAttribute("id","user-tel");
    telInput.setAttribute("name","user-tel");
    telInput.setAttribute("type","tel");
    telInput.setAttribute("pattern","^[0-9]+$");
    telInput.setAttribute("required","");
    telInput.setAttribute("title","Only numerics are allowed eg: 222552245");
    telContainer.appendChild(telInput);

    const emailContainer = document.createElement("div");
    emailContainer.className = "email-container"
    form.appendChild(emailContainer);

    const email = document.createElement("label");
    email.setAttribute("for","user-email");
    email.textContent = "E-mail: ";
    emailContainer.appendChild(email);

    const emailInput = document.createElement("input");
    emailInput.setAttribute("id","user-email");
    emailInput.setAttribute("name","user-email");
    emailInput.setAttribute("type","email");
    emailInput.setAttribute("required","");
    emailContainer.appendChild(emailInput);

    const paxContainer = document.createElement("div");
    paxContainer.className = "pax-container"
    form.appendChild(paxContainer);

    const pax = document.createElement("label");
    pax.setAttribute("for","user-pax");
    pax.textContent = "No. of Pax: ";
    paxContainer.appendChild(pax);

    const paxInput = document.createElement("input");
    paxInput.setAttribute("id","user-pax");
    paxInput.setAttribute("name","user-pax");
    paxInput.setAttribute("type","number");
    paxInput.setAttribute("required","");
    paxInput.setAttribute("min","1");
    paxInput.setAttribute("max","10");
    paxContainer.appendChild(paxInput);

    const requestContainer = document.createElement("div");
    requestContainer.className = "request-container"
    form.appendChild(requestContainer);
    const request = document.createElement("label");
    request.setAttribute("for","user-request");
    request.textContent = "Special Requests (We'll do our best to accomodate): ";
    requestContainer.appendChild(request);

    const requestInput = document.createElement("input");
    requestInput.setAttribute("id","user-request");
    requestInput.setAttribute("name","user-request");
    requestInput.setAttribute("type","text");
    requestInput.setAttribute("placeholder","eg: 1 piece childseat");
    requestContainer.appendChild(requestInput);

    const dateContainer = document.createElement("div");
    dateContainer.className = "date-container"
    form.appendChild(dateContainer);
    const date = document.createElement("label");
    date.setAttribute("for","user-date");
    date.textContent = "Date of Reservation: ";
    dateContainer.appendChild(date);

    const dateInput = document.createElement("input");
    dateInput.setAttribute("id","user-date");
    dateInput.setAttribute("name","user-date");
    const minDate = new Date();
    function getNextMonth () {
        const today = new Date();
        today.setMonth(today.getMonth() + 1);
        return today;
    };
    dateInput.setAttribute("type","date");
    dateInput.setAttribute("min", minDate);
    dateInput.setAttribute("max", getNextMonth());
    dateContainer.appendChild(dateInput);

    const timeContainer = document.createElement("div");
    timeContainer.className = "time-container"
    form.appendChild(timeContainer);
    const time = document.createElement("label");
    time.setAttribute("for","user-time");
    time.textContent = "Time of Reservation (10:00 - 22:00): ";
    timeContainer.appendChild(time);

    const timeInput = document.createElement("input");
    timeInput.setAttribute("id","user-time");
    timeInput.setAttribute("name","user-time");
    timeInput.setAttribute("type","time");
    timeInput.setAttribute("min","10:00");
    timeInput.setAttribute("max","22:00");
    timeInput.setAttribute("value","10:00");
    timeContainer.appendChild(timeInput);

    const submitContainer = document.createElement("div");
    submitContainer.className = "submit-container";
    form.appendChild(submitContainer);

    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit-button");
    submit.textContent = "Submit"
    submit.className = "reserve-btn";
    submitContainer.appendChild(submit);   
    submit.addEventListener("click", function () {confirm("Confirm reservation details?")});
}