const tabContent = document.querySelector(".tab-content");
const title = document.createElement("div");
const form = document.createElement("form");
const nameContainer = document.createElement("div");
const nameLabel = document.createElement("label");
const nameInput = document.createElement("input");
const telContainer = document.createElement("div");
const tel = document.createElement("label");
const telInput = document.createElement("input");
const emailContainer = document.createElement("div");
const email = document.createElement("label");
const emailInput = document.createElement("input");
const paxContainer = document.createElement("div");
const pax = document.createElement("label");
const paxInput = document.createElement("input");
const requestContainer = document.createElement("div");
const request = document.createElement("label");
const requestInput = document.createElement("input");
const dateContainer = document.createElement("div");
const date = document.createElement("label");
const dateInput = document.createElement("input");
const timeContainer = document.createElement("div");
const time = document.createElement("label");
const timeInput = document.createElement("input");
const submitContainer = document.createElement("div");
const submit = document.createElement("input");

function createTitle ()  {
    title.className = "title";
    title.textContent = "Baba Grill House";
    tabContent.appendChild(title);
};

function createForm ()  {
    form.setAttribute("method", "post");
    tabContent.appendChild(form);
};

function createNameContainer ()  {
    nameContainer.className = "name-container"
    form.appendChild(nameContainer);
};

function createNameLabel ()  {
    nameLabel.setAttribute("for","user-name");
    nameLabel.textContent = "Name: ";
    nameContainer.appendChild(nameLabel);
};

function createNameInput ()  {
    nameInput.setAttribute("id","user-name");
    nameInput.setAttribute("name","user-name");
    nameInput.setAttribute("type","text");
    nameInput.setAttribute("pattern","^[A-Za-z]+$");
    nameInput.setAttribute("required","");
    nameContainer.appendChild(nameInput);
};

function createTelContainer ()  {
    telContainer.className = "tel-container"
    form.appendChild(telContainer);
};

function createTelLabel()  {
    tel.setAttribute("for","user-tel");
    tel.textContent = "Contact Number: ";
    telContainer.appendChild(tel);
};

function createTelInput ()  {
    telInput.setAttribute("id","user-tel");
    telInput.setAttribute("name","user-tel");
    telInput.setAttribute("type","tel");
    telInput.setAttribute("pattern","^[0-9]+$");
    telInput.setAttribute("required","");
    telInput.setAttribute("title","Only numerics are allowed eg: 222552245");
    telContainer.appendChild(telInput);
};

function createEmailContainer ()  {
    emailContainer.className = "email-container"
    form.appendChild(emailContainer);
};

function createEmailLabel ()  {
    email.setAttribute("for","user-email");
    email.textContent = "E-mail: ";
    emailContainer.appendChild(email);
};

function createEmailInput()  {
    emailInput.setAttribute("id","user-email");
    emailInput.setAttribute("name","user-email");
    emailInput.setAttribute("type","email");
    emailInput.setAttribute("required","");
    emailContainer.appendChild(emailInput);
};

function createPaxContainer ()  {
    paxContainer.className = "pax-container"
    form.appendChild(paxContainer);
};

function createPaxLabel ()  {
    pax.setAttribute("for","user-pax");
    pax.textContent = "No. of Pax: ";
    paxContainer.appendChild(pax);
};

function createPaxInput ()  {
    paxInput.setAttribute("id","user-pax");
    paxInput.setAttribute("name","user-pax");
    paxInput.setAttribute("type","number");
    paxInput.setAttribute("required","");
    paxInput.setAttribute("min","1");
    paxInput.setAttribute("max","10");
    paxContainer.appendChild(paxInput);
};

function createRequestContainer ()  {
    requestContainer.className = "request-container"
    form.appendChild(requestContainer);
    const request = document.createElement("label");
    request.setAttribute("for","user-request");
    requestContainer.appendChild(request);
};

function createRequestLabel ()  {
    request.setAttribute("for","request-label");
    request.textContent = "Special Requests (We'll do our best to accomodate): ";
    requestContainer.appendChild(request);
};

function createRequestInput ()  {
    requestInput.setAttribute("id","user-request");
    requestInput.setAttribute("name","user-request");
    requestInput.setAttribute("type","text");
    requestInput.setAttribute("placeholder","eg: 1 piece childseat");
    requestContainer.appendChild(requestInput);
};

function createDateContainer ()  {
    dateContainer.className = "date-container"
    form.appendChild(dateContainer);
    dateContainer.appendChild(date);
};

function createDateLabel ()  {
    date.setAttribute("for","user-date");
    date.textContent = "Date of Reservation: ";
    dateContainer.appendChild(date);
};

function createDateInput ()  {
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
};

function createTimeContainer ()  {
    timeContainer.className = "time-container"
    form.appendChild(timeContainer);
    timeContainer.appendChild(time);
};

function createTimeLabel ()  {
    time.setAttribute("for","user-time");
    time.textContent = "Time of Reservation (10:00 - 22:00): ";
    timeContainer.appendChild(time);
};

function createTimeInput ()  {
    timeInput.setAttribute("id","user-time");
    timeInput.setAttribute("name","user-time");
    timeInput.setAttribute("type","time");
    timeInput.setAttribute("min","10:00");
    timeInput.setAttribute("max","22:00");
    timeInput.setAttribute("value","10:00");
    timeContainer.appendChild(timeInput);
};

function createSubmitContainer ()  {
    submitContainer.className = "submit-container";
    form.appendChild(submitContainer);
};

function createSubmitInput ()  {
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit-button");
    submit.textContent = "Submit"
    submit.className = "reserve-btn";
    submitContainer.appendChild(submit);   
    submit.addEventListener("click", function () {confirm("Confirm reservation details?")});
};

export function reserveTabContent ()  {
    createTitle();
    createForm();
    createNameContainer();
    createNameLabel();
    createNameInput();
    createTelContainer();
    createTelLabel();
    createTelInput();
    createEmailContainer();
    createEmailLabel();
    createEmailInput();
    createPaxContainer();
    createPaxLabel();
    createPaxInput();
    createRequestContainer();
    createRequestLabel();
    createRequestInput();
    createDateContainer();
    createDateLabel();
    createDateInput();
    createTimeContainer();
    createTimeLabel();
    createTimeInput();
    createSubmitContainer();
    createSubmitInput();
};