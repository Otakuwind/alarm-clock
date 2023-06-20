const currentTime = document.querySelector("h1");
const content =  document.querySelector("time-set");
const selectMenu =  document.querySelectorAll("input");
const setAlarmBtn =   document.querySelector("btn");

/**Ringtone */

let alarmTime, isAlarmSet,
ringtone = new Audio("./files/ringtone.mp3");


/****Hours*****/

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

/***minutes**/

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}


/****AM/PM ***/



for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

